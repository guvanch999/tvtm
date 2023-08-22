// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import News from "App/Models/News";
import NewsValidator from "App/Validators/NewsValidator";

export default class NewsController {
  public async getAll({request, response}: HttpContextContract) {
    let {page} = request.qs()
    page = page || 1
    let list = await News.query().preload('diller').paginate(page, 20)

    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }

  public async create({request, response}: HttpContextContract) {
    let data = await request.validate(NewsValidator)
    let news = await News.create(data)
    return response.ok({
      success: true,
      data: news
    })
  }

  public async update({request, response, params}: HttpContextContract) {
    const news = await News.findByOrFail("id", params.id)
    await news.merge(request.body()).save()
    return response.ok({
      success: true,
      data: news
    })
  }

  public async removeNews({response, params}: HttpContextContract) {
    const news = await News.findByOrFail('id', params.id)
    await news.delete()
    return response.ok({
      success: true
    })
  }


}
