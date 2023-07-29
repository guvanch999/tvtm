// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import LoginDatum from "App/Models/LoginDatum";
import RemoteAccessValidator from "App/Validators/RemoteAccessValidator";
import {set_token, try_login} from "App/Helpers/TokenHandler";

export default class RemoteSettingsController {
  public async get_remote_access_credentials({response}: HttpContextContract) {
    let data = await LoginDatum.query().firstOrFail()
    return response.ok({
      success: true,
      data
    })
  }

  public async update_access_credentials({request, response}: HttpContextContract) {
    let body = await request.validate(RemoteAccessValidator)

    let token = await try_login(body.telnumber, body.password)

    let data = await LoginDatum.firstOrFail()
    await data.merge(body).save()

    set_token(token)
    return response.ok({
      success: true,
      data
    })
  }
}
