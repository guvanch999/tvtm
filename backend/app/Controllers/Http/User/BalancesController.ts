// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Balan from "App/Models/Balan";
import BalansHistory from "App/Models/BalansHistory";
import {AuthenticationException} from "@adonisjs/auth/build/standalone";

export default class BalancesController {
  public async fill_up_balance({request, response, auth}: HttpContextContract) {
    let diller = auth.use("api_diller").user
    let summ: number = request.body().summ || 0

    if (!diller) {
      throw new AuthenticationException('No diller found', 'E_UNAUTHORIZED_ACCESS')
    }

    let balance: Balan = await Balan.findBy('diller_id', diller.id) || await Balan.create({diller_id: diller.id})

    balance.summ += summ

    await balance.save()

    await diller.load('balans', (query => {
      query.select("summ").as("balans")
    }))

    await BalansHistory.create({
      type: 'income',
      sum: +summ,
      action: 'Пополнение баланса',
      balans_id: balance.id
    })

    return response.ok({
      success: true,
      data: diller
    })
  }

  public async balance_history({request, response, auth}: HttpContextContract) {
    let diller = auth.use("api_diller").user
    if (!diller) {
      throw new AuthenticationException('No diller found', 'E_UNAUTHORIZED_ACCESS')
    }
    let page: number = request.qs().page || 1
    let limit: number = request.qs().limit || 20
    let query: string = request.qs().query || ''
    let balance: Balan = await Balan.findBy('diller_id', diller.id) || await Balan.create({diller_id: diller.id})
    let list = await BalansHistory.query()
      .whereRaw(`balans_id=${balance.id} and created_at::varchar like '%${query}%'`)
      .paginate(page, limit)

    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }
}
