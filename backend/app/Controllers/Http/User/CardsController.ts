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
import {inject} from "@adonisjs/fold";
import LogsService from "App/Services/LogsService";
import ChangeCardValidator from "App/Validators/ChangeCardValidator";
import ChangeNotification from "App/Models/ChangeNotification";

@inject()
export default class CardsController {
  constructor(public logService: LogsService) {


  }

  public async get_all({request, response, auth}: HttpContextContract) {
    const diller = auth.use('api_diller').user
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20
    let query: string = request.qs().query || ''

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

    this.logService.create({
      action: `Покупка подписки: ${created_client.packet} на сумму: ${card_summ}`,
      diller: JSON.stringify(diller),
      client: JSON.stringify(created_client),
      diller_id: diller.id,
      cardnumber: created_client.cardnumber,
    })

    return response.ok({
      success: true,
      data: created_client,
      balans: balans.summ,

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


    this.logService.create({
      action: `Переактивация карты:${client.cardnumber}`,
      diller: JSON.stringify(diller),
      client: JSON.stringify(client),
      diller_id: diller.id,
      cardnumber: client.cardnumber,
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
      sum: card_summ,
      action: 'Покупка подписки',
      balans_id: balans.id
    })

    this.logService.create({
      action: `Покупка подписки: ${updated_data.packet} на сумму: ${card_summ}`,
      diller: JSON.stringify(diller),
      client: JSON.stringify(updated_data),
      diller_id: diller.id,
      cardnumber: updated_data.cardnumber,
    })

    return response.ok({
      success: true,
      data: updated_data,
      balans: balans.summ
    })
  }

  public async get_card_information({response, params, auth}: HttpContextContract) {
    let {card_number} = params
    let card = await Client.query()
      .where("cardnumber", card_number)
      .where('diller_id', auth.use("api_diller")?.user?.id ?? 0)
      .firstOrFail()

    let packet = await Packet.findBy('packet', card.packet)

    return response.ok({
      success: true,
      data: card,
      packet
    })
  }

  public async getPackets({response}: HttpContextContract) {
    let list = await Packet.all()
    return response.ok({
      success: true,
      data: list
    })
  }

  public async changeCard({request, response, auth}: HttpContextContract) {
    const data = await request.validate(ChangeCardValidator)

    const diller = auth.use('api_diller').user
    if (!diller) {
      throw new HttpException('Auth exception', 401, "E_UNAUTHORIZED_ACCESS")
    }

    await ChangeNotification.create({
      cardnumber: data.cardnumber,
      new_cardnumber: data.new_cardnumber,
      reason: data.reason,
      diller_id: diller.id
    })

    return response.ok({
      success: true,
    })
  }
}
