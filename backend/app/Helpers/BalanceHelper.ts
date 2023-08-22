import Diller from "App/Models/Diller";
import Packet from "App/Models/Packet";
import {MissingArgumentException} from "@adonisjs/ace/build/src/Exceptions";
import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";

export async function checkMyBalance(diller: Diller, packet: string, srok: number) {
  let pac = await Packet.findBy('packet', packet)
  if (!pac) {
    throw new MissingArgumentException('No packet found')
  }
  let card_summ = Math.floor((+pac.price - (+pac.price * (diller.skidka / 100))) * srok * 100) / 100
  await diller.load("balans")
  if (diller.balans.summ < card_summ) {
    throw new HttpException("Balance is too low", 400, "E_LOW_BALANCE_EXCEPTION")
  }

  return pac

}
