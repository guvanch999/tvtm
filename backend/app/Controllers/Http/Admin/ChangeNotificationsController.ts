// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import FilterValidator from "App/Validators/FilterValidator";
import ChangeNotification from "App/Models/ChangeNotification";
import StatusValidator from "App/Validators/StatusValidator";

export default class ChangeNotificationsController {
  public async getAll({request, response}: HttpContextContract) {
    let data = await request.validate(FilterValidator)

    data.page = data.page ?? 1
    data.limit = data.limit ?? 20

    const query = ChangeNotification.query()
    if (data.search) {
      query.where(function () {
        query.orWhereLike('cardnumber', `%${data.search}%`)
        query.orWhereLike('new_cardnumber', `%${data.search}%`)
        query.orWhereLike('reason', `%${data.search}%`)
      })
    }
    if (data.diller_id) {
      query.where('diller_id', data.diller_id)
    }

    let list = await query
      .preload('diller')
      .paginate(data.page, data.limit)

    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }

  public async show({request, response}: HttpContextContract) {
    const not = await ChangeNotification.findByOrFail("id", request.param('id'))
    not.is_new = false
    await not.save()
    return response.ok({
      success: true,
      data: not
    })
  }

  public async changeStatus({request, response}: HttpContextContract) {
    const status = await request.validate(StatusValidator)
    const not = await ChangeNotification.findByOrFail('id', request.param('id'))
    not.status = status.status
    await not.save()
    await not.load('diller')
    return response.ok({
      success: true,
      data: not
    })
  }
}
