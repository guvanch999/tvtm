import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class CardActivityHistory extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public action: string

  @column()
  public client_id: number

  @column()
  public diller_id: number


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
