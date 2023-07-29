import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'card_activity_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.text('action').notNullable()


      table.integer('client_id')
        .unsigned()
        .references('clients.id')
        .onDelete('cascade')
        .notNullable()

      table.integer('diller_id')
        .unsigned()
        .references('dillers.id')
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
