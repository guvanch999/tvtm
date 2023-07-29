// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Client from "App/Models/Client";
import ClientValidator from "App/Validators/ClientValidator";
import {ClientInterface} from "App/Helpers/interfaces";
import {create_card, re_new_card, reactivate_card} from "App/Helpers/RemoteHelper";
import BuyOrExtendValidator from "App/Validators/BuyOrExtendValidator";
import {Exception} from "@poppinss/utils";
import {checkMyBalance} from "App/Helpers/BalanceHelper";
import Packet from "App/Models/Packet";
import CardActivityHistory from "App/Models/CardActivityHistory";
import SubscribtionHistory from "App/Models/SubscribtionHistory";
import Balan from "App/Models/Balan";
import BalansHistory from "App/Models/BalansHistory";
import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";

export default class CardsController {
  public async get_all({request, response, auth}: HttpContextContract) {
    const diller = auth.use('api_diller').user
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20
    let query: string = request.qs().query || ''

    console.log(diller?.id)
    let cards = await Client.query()
      .whereRaw(`diller_id = ${diller?.id || 0} and (cardnumber like '%${query}%' or name like '%${query}%' or surname like '%${query}%' or telnumber like '%${query}%' or note like '%${query}%')`)
      .paginate(page, limit)

    return response.ok({
      success: true,
      data: cards.all(),
      total: cards.total
    })
  }

  public async create({request, response, auth}: HttpContextContract) {
    let data = await request.validate(ClientValidator)
    const diller = auth.use("api_diller").user
    if (!diller) {
      throw new Exception("No diller found", 400)
    }
    data.diller_id = diller.id
    let pac = await checkMyBalance(diller, data.packet)
    let client = new Client()
    client.merge(data)
    let created_client = await create_card(client)
    await CardActivityHistory.create({
      action: `Кард зарегистрирован на пакет:${created_client.packet} на срок ${created_client.srok} месяца`,
      client_id: created_client.id,
      diller_id: diller.id
    })
    await SubscribtionHistory.create({
      action: `Кард зарегистрирован на пакет:${created_client.packet} на срок ${created_client.srok} месяца`,
      client_id: created_client.id,
      packet: created_client.packet,
      price: +pac.price,
      srok: created_client.srok
    })
    let balans = await Balan.findBy('diller_id', diller.id) ?? await Balan.create({diller_id: diller.id})

    let card_summ = Math.floor((+pac.price - (+pac.price * (diller.skidka / 100))) * created_client.srok)

    balans.summ -= card_summ
    await balans.save()
    await BalansHistory.create({
      type: 'outcome',
      sum: +pac.price,
      action: 'Покупка подписки',
      balans_id: balans.id
    })
    diller.client_count += 1
    await diller.save()
    return response.ok({
      success: true,
      data: created_client,
      balans: balans.summ
    })
  }

  public async update({request, response, client}: HttpContextContract & ClientInterface) {
    let data = await request.validate(ClientValidator)
    await client.merge(data).save()
    return response.ok({
      success: true,
      data: client
    })
  }

  public async reactivation({response, client, auth}: HttpContextContract & ClientInterface) {

    const diller = auth.use("api_diller").user
    if (!diller) {
      throw new HttpException("No diller found")
    }

    await reactivate_card(client.cardnumber)

    await CardActivityHistory.create({
      action: `Реактивация карты`,
      client_id: client.id,
      diller_id: diller.id
    })

    return response.ok({
      success: true,
      data: client
    })
  }

  public async buy_or_extend({request, response, client, auth}: HttpContextContract & ClientInterface) {
    const diller = auth.use('api_diller').user

    if (!diller) {
      throw new HttpException("No diller found")
    }

    let data = await request.validate(BuyOrExtendValidator)


    let pac = await checkMyBalance(diller, data.packet)


    client.srok = data.srok
    client.packet = data.packet

    let updated_data = await re_new_card(client)


    await CardActivityHistory.create({
      action: `Карта переключен на пакет:${updated_data.packet} на срок ${updated_data.srok} месяца`,
      client_id: updated_data.id,
      diller_id: diller.id
    })
    await SubscribtionHistory.create({
      action: `Карта переключен на пакет:${updated_data.packet} на срок ${updated_data.srok} месяца`,
      client_id: updated_data.id,
      packet: updated_data.packet,
      price: +pac.price,
      srok: updated_data.srok
    })
    let balans = await Balan.findBy('diller_id', diller.id) ?? await Balan.create({diller_id: diller.id})

    let card_summ = Math.floor((+pac.price - (+pac.price * (diller.skidka / 100))) * updated_data.srok)

    balans.summ -= card_summ
    await balans.save()
    await BalansHistory.create({
      type: 'outcome',
      sum: +pac.price,
      action: 'Покупка подписки',
      balans_id: balans.id
    })

    return response.ok({
      success: true,
      data: updated_data,
      balans: balans.summ
    })
  }

  public async get_card_information({response, params, auth}: HttpContextContract) {
    let {card_number} = params
    console.log(card_number)
    let card = await Client.query()
      .where("cardnumber", card_number)
      .where('diller_id', auth.use("api_diller")?.user?.id ?? 0)
      .firstOrFail()


    if (!card) {
      return response.badRequest({
        success: false,
        message: 'No card found'
      })
    }
    return response.ok({
      success: true,
      data: card
    })
  }

  public async getPackets({response}: HttpContextContract) {
    let list = await Packet.all()
    return response.ok({
      success: true,
      data: list
    })
  }
}
