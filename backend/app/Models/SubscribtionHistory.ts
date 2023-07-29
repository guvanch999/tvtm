import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class SubscribtionHistory extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public action: string

  @column()
  public packet: string

  @column()
  public srok: number

  @column()
  public price: number

  @column()
  public client_id: number

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime | null) => {
      return value ? format_date_time(value) : value
    }
  })
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
