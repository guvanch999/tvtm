// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import News from "App/Models/News";
import {MissingArgumentException} from "@adonisjs/ace/build/src/Exceptions";

export default class NewsController {
  public async getMyNews({request, response, auth}: HttpContextContract) {

    const diller = auth.use('api_diller').user
    if (!diller) {
      throw new MissingArgumentException("Cannot find diller!!!")
    }
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20

    const news = await News.query().whereRaw('diller_id=? or coalesce(diller_id,0)=0', [diller.id]).paginate(page, limit)
    return response.ok({
      success: true,
      data: news.all(),
      total: news.total
    })
  }
}
