// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import AuthValidator from "App/Validators/AuthValidator";
import Hash from "@ioc:Adonis/Core/Hash";
import Diller from "App/Models/Diller";
import Balan from "App/Models/Balan";
import {AuthenticationException} from "@adonisjs/auth/build/standalone";
import UpdateDillerValidator from "App/Validators/UpdateDillerValidator";

export default class UsersController {
  public async login({request, response, auth}: HttpContextContract) {
    const data = await request.validate(AuthValidator)

    const phone_number = data.phone_number.replace("+", "")
    const password = data.password

    // Lookup user manually
    const user = await Diller
      .query()
      .where('phone_number', phone_number)
      .first()

    if (!user) {
      return response.unauthorized('Invalid credentials')
    }

    // Verify password
    if (!(await Hash.verify(user.password, password))) {
      return response.unauthorized('Invalid credentials')
    }

    // Generate token
    const token = await auth.use('api_diller').generate(user)

    return response.ok({
      success: true,
      token
    })
  }

  public async register({request, response}: HttpContextContract) {
    let data = await request.validate(AuthValidator)
    data.phone_number = data.phone_number.replace("+", "")
    data.password_save = data.password
    const diller = await Diller.create(data)
    await Balan.create({diller_id: diller.id})
    return response.ok({
      success: true,
      data: diller
    })
  }

  public async get_my_detail({response, auth}: HttpContextContract) {
    let diller = auth.use('api_diller').user
    if (diller) {
      await diller.load('balans', (query => {
        query.select("summ").as('balance')
      }))
      return response.ok({
        success: true,
        data: diller
      })
    } else return response.unauthorized({
      success: false,
      message: 'Unauthorized access'
    })
  }

  public async update_my_detail({request, response, auth}: HttpContextContract) {
    let diller = auth.use("api_diller").user
    if (!diller) {
      throw new AuthenticationException('No diller found', 'E_UNAUTHORIZED_ACCESS')
    }
    let data = await request.validate(UpdateDillerValidator)

    if (data.password) data.password_save = data.password

    await diller.merge(data).save()

    await diller.load("balans", query => {
      query.select("summ").as("balans")
    })
    return response.ok({
      success: true,
      data: diller
    })
  }
}
