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

export default class ClientsController {

  public async getAllClient({request, response}: HttpContextContract) {
    let {page, diller_id} = request.qs()
    page = page || 1
    let data: ModelPaginatorContract<Client>
    let filter = {}
    if (parseInt(diller_id)) filter['diller_id'] = diller_id
    data = await Client.query().where(filter).paginate(page, 10)
    return response.ok({
      success: true,
      data: data.all(),
      total: data.total
    })
  }

  public async create({request, response}: HttpContextContract) {
    let data = await request.validate(ClientValidator)

    let client = new Client()
    client.merge(data)

    let res = await create_card(client)

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
    await client.delete()
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
