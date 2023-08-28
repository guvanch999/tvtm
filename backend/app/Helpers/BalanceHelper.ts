import Diller from "App/Models/Diller";
import Packet from "App/Models/Packet";
import {MissingArgumentException} from "@adonisjs/ace/build/src/Exceptions";
import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";

export async function checkMyBalance(diller: Diller, packet: string, srok: number) {
  let pac = await Packet.findBy('packet', packet)
  if (!pac) {
    throw new MissingArgumentException('No packet found')
  }
  let card_summ = calculateBalance(+pac.price, diller.skidka, srok)
  await diller.load("balans")
  if (diller.balans.summ < card_summ) {
    throw new HttpException("Balance is too low", 400, "E_LOW_BALANCE_EXCEPTION")
  }

  return pac

}

export function calculateBalance(price: number, skidka: number, srok: number): number {
  let short_skidka: number = parseFloat((skidka / 100).toFixed(2))
  let disc: number = parseFloat((price * short_skidka).toFixed(2))
  return (price - disc) * srok
}
