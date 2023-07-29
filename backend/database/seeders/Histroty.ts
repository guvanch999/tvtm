import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SubscribtionHistory from "App/Models/SubscribtionHistory";
import CardActivityHistory from "App/Models/CardActivityHistory";

export default class extends BaseSeeder {
  public async run() {
    await SubscribtionHistory.create({
      action: 'Vip',
      packet: 'Vip',
      srok: 1,
      price: 23,
      client_id: 4
    })
    await CardActivityHistory.create({
      action: 'Hello world',
      client_id: 4,
      diller_id: 4
    })
  }
}
