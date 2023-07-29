import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {ClientInterface} from "App/Helpers/interfaces";
import Client from "App/Models/Client";

export default class FindClient {
  public async handle(cnx: HttpContextContract & ClientInterface, next: () => Promise<void>) {

    const client = await Client.findBy('id', cnx.params.id)

    if (!client) {
      return cnx.response.notFound({
        success: false,
        message: 'No client found'
      })
    }
    cnx.client = client
    await next()
  }
}
