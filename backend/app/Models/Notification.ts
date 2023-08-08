import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Diller from "App/Models/Diller";
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class Notification extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public action: string

  @column()
  public is_new: boolean

  @column()
  public diller_id: number

  @belongsTo(() => Diller)
  public diller: BelongsTo<typeof Diller>

  @column.dateTime({
      autoCreate: true,
      serialize: (value: DateTime | null) => {
        return value ? format_date_time(value) : value
      }
    }
  )
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
