import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dillers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('phone_number').notNullable().unique()
      table.string('password').notNullable()
      table.string('password_save').notNullable()
      table.string("full_name", 1000)
      table.string('email').nullable()
      table.double('skidka').notNullable().defaultTo(0)
      table.integer('client_count').notNullable().defaultTo(0)
      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
