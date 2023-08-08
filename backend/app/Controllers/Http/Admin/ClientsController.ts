// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Client from "App/Models/Client";
import ClientValidator from "App/Validators/ClientValidator";
import {ClientInterface} from "App/Helpers/interfaces";
import SubscribtionHistory from "App/Models/SubscribtionHistory";
import CardActivityHistory from "App/Models/CardActivityHistory";
import {ModelPaginatorContract} from "@ioc:Adonis/Lucid/Orm";
import {create_card} from "App/Helpers/RemoteHelper";
import Packet from "App/Models/Packet";
import {inject} from "@adonisjs/fold";
import LogsService from "App/Services/LogsService";
import ClientForAdminValidator from "App/Validators/ClientForAdminValidator";
import Diller from "App/Models/Diller";

@inject()
export default class ClientsController {
  constructor(public logsService: LogsService) {
  }

  public async getAllClient({request, response}: HttpContextContract) {
    let {page, diller_id, search} = request.qs()
    page = page || 1
    let data: ModelPaginatorContract<Client>
    const query = Client.query()
    if (parseInt(diller_id)) query.where('diller_id', diller_id)
    if (search) {
      query.where(function (qu) {
        qu.orWhere("cardnumber", 'like', `%${search}%`)
        qu.orWhere("name", 'like', `%${search}%`)
        qu.orWhere("surname", 'like', `%${search}%`)
        qu.orWhere("telnumber", 'like', `%${search}%`)
        qu.orWhere("adress", 'like', `%${search}%`)
        qu.orWhere("packet", 'like', `%${search}%`)
        qu.orWhere("resiver", 'like', `%${search}%`)
        qu.orWhere("note", 'like', `%${search}%`)
      })
    }

    data = await query.paginate(page, 10)
    return response.ok({
      success: true,
      data: data.all(),
      total: data.total
    })
  }

  public async create({request, response}: HttpContextContract) {
    let data = await request.validate(ClientForAdminValidator)

    let diller = await Diller.findByOrFail('id', data.diller_id)
    let client = new Client()
    client.merge(data)

    let res = await create_card(client)

    this.logsService.create({
      action: `Админ зарегистрировал карту на ${diller.full_name} `,
      diller: JSON.stringify(diller),
      client: JSON.stringify(res),
      diller_id: diller.id,
      cardnumber: res.cardnumber,
    })
    return response.ok({
      success: true,
      data: res
    })
  }

  public async getClientDetail({response, client}: HttpContextContract & ClientInterface) {
    await client.load('diller')
    return response.ok({
      success: true,
      data: client
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

  public async removeClient({response, client}: HttpContextContract & ClientInterface) {
    let diller = await Diller.findByOrFail('id', client.diller_id)
    await client.delete()

    this.logsService.create({
      action: `Админ удалил карту  ${client.cardnumber} `,
      diller: JSON.stringify(diller),
      client: JSON.stringify(client),
      diller_id: diller.id,
      cardnumber: client.cardnumber,
    })
    return response.ok({
      success: true
    })
  }

  public async getSubscriptionHistory({request, response, client}: HttpContextContract & ClientInterface) {

    let {page} = request.qs()
    page = page || 1

    let history = await SubscribtionHistory.query().where('client_id', client.id).paginate(page, 20)

    return response.ok({
      success: true,
      data: history.all(),
      total: history.total
    })
  }

  public async getActivityHistory({request, response, client}: HttpContextContract & ClientInterface) {
    let {page} = request.qs()
    page = page || 1
    let history = await CardActivityHistory.query().where('client_id', client.id).paginate(page, 20)

    return response.ok({
      success: true,
      data: history.all(),
      total: history.total
    })
  }

  public async loadAllPackets({response}: HttpContextContract) {
    let data = await Packet.all()
    return response.ok({
      success: true,
      data
    })
  }
}
