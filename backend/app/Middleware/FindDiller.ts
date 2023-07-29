import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Diller from "App/Models/Diller";
import {DillerInterface} from "App/Helpers/interfaces";

export default class FindDiller {
  public async handle(cnx: HttpContextContract & DillerInterface, next: () => Promise<void>) {
    const diller = await Diller.findBy('id', cnx.params.id)

    if (!diller) {
      return cnx.response.notFound({
        success: false,
        message: 'No diller found'
      })
    }
    cnx.diller = diller
    await next()
  }
}
