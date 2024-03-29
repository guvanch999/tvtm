import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'login_data'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.text('note')
      table.string('telnumber').notNullable()
      table.string('password').notNullable()


      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
