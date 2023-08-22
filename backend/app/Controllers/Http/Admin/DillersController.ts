// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Diller from "App/Models/Diller";
import AuthValidator from "App/Validators/AuthValidator";
import {DillerInterface} from "App/Helpers/interfaces";
import UpdateDillerValidator from "App/Validators/UpdateDillerValidator";
import Balan from "App/Models/Balan";
import BalansHistory from "App/Models/BalansHistory";
import {sync_packets} from "App/Helpers/RemoteHelper";
import {inject} from "@adonisjs/fold";
import LogsService from "App/Services/LogsService";
import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";

@inject()
export default class DillersController {
  constructor(public logsService: LogsService) {
  }

  public async get_dillers_list({response, request}: HttpContextContract) {
    let {page} = request.qs()
    page = page || 1
    let data = await Diller.query().preload('balans', (query) => {
      query.select('summ').as('balans')
    }).orderBy('id', 'desc').paginate(page)
    return response.ok({
      success: true,
      data: data.all(),
      total: data.total
    })
  }

  public async create({request, response}: HttpContextContract) {
    let data = await request.validate(AuthValidator)
    data.phone_number = data.phone_number.replace("+", "")
    data.password_save = data.password
    let diller = await Diller.create(data)
    await Balan.create({diller_id: diller.id})
    return response.ok({
      success: true,
      data: diller
    })
  }

  public async update({request, response, diller}: HttpContextContract & DillerInterface) {

    let data = await request.validate(UpdateDillerValidator)

    if (data.password) data.password_save = data.password

    await diller.merge(data).save()

    await diller.load('balans', query => {
      query.select('balans').as('balans')
    })
    return response.ok({
      success: true,
      data: diller
    })
  }

  public async remove({response, diller}: HttpContextContract & DillerInterface) {
    await diller.delete()
    return response.ok({
      success: true,
    })
  }

  public async updateBalance({request, response, diller}: HttpContextContract & DillerInterface) {

    let {summ} = request.body()

    let balans = await Balan.findBy('diller_id', diller.id)
    if (!balans) {
      balans = await Balan.create({summ: 0, diller_id: diller.id})
    }
    balans.summ = summ
    await balans.save()
    await diller.load('balans', (query => {
      query.select('summ').as('balans')
    }))
    BalansHistory.create({
      type: 'round_up',
      sum: summ,
      action: `Уравнение баланса на сумму: ${summ} TMT(через админ)`,
      balans_id: balans.id
    })
    this.logsService.create({
      diller: JSON.stringify(diller),
      action: `Уравнение баланса на сумму: ${summ} TMT(через админ)`,
      diller_id: diller.id
    })
    return response.ok({
      success: true,
      data: diller
    })
  }

  public async fillUpBalance({request, response, diller}: HttpContextContract & DillerInterface) {
    let summ: number = parseFloat(request.body().summ)

    if (!summ) {
      throw new HttpException("Sum is invalid", 400, "E_VALIDATION_FAILURE")
    }
    let balans = await Balan.findBy('diller_id', diller.id)
    if (!balans) {
      balans = await Balan.create({summ: 0, diller_id: diller.id})
    }

    balans.summ += summ
    await balans.save()
    await diller.load('balans', (query => {
      query.select('summ').as('balans')
    }))
    BalansHistory.create({
      type: 'fill_up',
      sum: summ,
      action: `Пополнение баланса на сумму: ${summ} TMT(через админ)`,
      balans_id: balans.id
    })
    this.logsService.create({
      diller: JSON.stringify(diller),
      action: `Пополнение баланса на сумму: ${summ} TMT(через админ)`,
      diller_id: diller.id
    })
    return response.ok({
      success: true,
      data: diller
    })
  }

  public async getBalanceHistory({request, response, diller}: HttpContextContract & DillerInterface) {
    let {page} = request.qs()
    page = page || 1
    let balance = await Balan.findBy('diller_id', diller.id)
    if (!balance) {
      balance = await Balan.create({diller_id: diller.id})
    }
    let list = await BalansHistory.query().where("balans_id", balance.id).paginate(page)
    return response.ok({
      success: true,
      data: list.all(),
      total: list.total
    })
  }

  public async sync_packets({response}: HttpContextContract) {
    await sync_packets()

    return response.ok({
      success: true
    })
  }
}
