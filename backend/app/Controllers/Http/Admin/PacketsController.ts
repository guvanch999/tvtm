// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Packet from "App/Models/Packet";
import {sync_packets} from "App/Helpers/RemoteHelper";

export default class PacketsController {
  public async getAll({response}: HttpContextContract) {
    let list = await Packet.all()
    return response.ok({
      success: true,
      data: list
    })
  }

  public async sync_packets({response}: HttpContextContract) {
    await sync_packets()
    let list = await Packet.all()
    return response.ok({
      success: true,
      data: list
    })
  }
}
