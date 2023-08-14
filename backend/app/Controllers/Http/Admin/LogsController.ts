// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import FilterValidator from "App/Validators/FilterValidator";
import Logs from "App/Models/Logs";

export default class LogsController {
  public async getAll({request, response}: HttpContextContract) {
    let filter_data = await request.validate(FilterValidator)
    const query = Logs.query()
    if (filter_data.diller_id) query.where('diller_id', filter_data.diller_id)
    if (filter_data.search) {
      query.where(function (){
        query.orWhereILike('action', `%${filter_data.search}%`)
        query.orWhereILike('cardnumber', `%${filter_data.search}%`)
      })

    }
    let data = await query.paginate(filter_data.page ?? 1, filter_data.limit ?? 20)

    return response.ok({
      success: true,
      data: data.all(),
      total: data.total
    })
  }
}
