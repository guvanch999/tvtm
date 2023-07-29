import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'packets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('packet').nullable()
      table.string('price').nullable()
      table.string('description').nullable()
      table.string('access_criteria').nullable()
      table.integer('status').nullable()
      table.integer('promotion').nullable()
      table.integer('activation').nullable()
      table.integer('prodleniye').nullable()
      table.integer('srok').nullable()
      table.string('type').nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
