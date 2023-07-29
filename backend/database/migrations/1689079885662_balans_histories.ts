import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'balans_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('type').notNullable()
      table.double('sum').notNullable()
      table.text('action').notNullable()

      table.integer("balans_id")
        .unsigned()
        .references('balans.id')
        .onDelete("cascade")
        .notNullable()

      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
