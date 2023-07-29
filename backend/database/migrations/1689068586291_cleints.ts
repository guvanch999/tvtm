import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('cardnumber').notNullable()
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('telnumber').notNullable()
      table.string('adress').nullable()
      table.string('packet').notNullable()
      table.integer('srok').notNullable()
      table.string('resiver').notNullable()
      table.string('date_start').nullable()
      table.string('date_end').nullable()
      table.text('note').nullable()
      table.integer('diller_id')
        .unsigned()
        .references('dillers.id')
        .onDelete('cascade')
        .notNullable()

      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
