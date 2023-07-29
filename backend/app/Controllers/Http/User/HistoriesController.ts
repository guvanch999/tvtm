// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {ClientInterface} from "App/Helpers/interfaces";
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import SubscribtionHistory from "App/Models/SubscribtionHistory";
import CardActivityHistory from "App/Models/CardActivityHistory";

export default class HistoriesController {
  public async get_subscription_history({request, response, client}: HttpContextContract & ClientInterface) {
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20

    let list = await SubscribtionHistory.query()
      .where("client_id", client.id)
      .paginate(page, limit)

    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }

  public async get_activity_history({request, response, client}: HttpContextContract & ClientInterface) {
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20

    let list = await CardActivityHistory.query()
      .where("client_id", client.id)
      .paginate(page, limit)

    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }
}
