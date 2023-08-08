import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'change_card_not'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('cardnumber').notNullable()
      table.string('new_cardnumber').notNullable()
      table.string('reason').nullable()
      table.string('status').notNullable().defaultTo('PENDING')
      table.integer('diller_id').unsigned().references('id').inTable('dillers').onDelete('cascade')
      table.boolean('is_new').notNullable().defaultTo(true)
      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
