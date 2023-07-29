import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from "App/Models/Admin";

export default class extends BaseSeeder {
  public async run() {
    await Admin.create({
      phone_number: '99364155314',
      password: '123',
      full_name: 'DG'
    })
  }
}
