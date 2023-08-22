import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from "App/Models/Admin";

export default class extends BaseSeeder {
  public async run() {
    await Admin.create({
      phone_number: '99365559120',
      password: 'Familyforever2012',
      full_name: 'Hojayyn'
    })
  }
}
