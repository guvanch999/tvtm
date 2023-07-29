import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LoginDatum from "App/Models/LoginDatum";

export default class extends BaseSeeder {
  public async run () {
    const loginData = await LoginDatum.query().first()
    if(!loginData){
      await LoginDatum.create({
        telnumber: "99365965102",
        password: "begaforever"
      })
    }
  }
}
