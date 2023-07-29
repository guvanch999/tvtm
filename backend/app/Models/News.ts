import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Diller from "App/Models/Diller";
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class News extends BaseModel {
  @column({isPrimary: true})
  public id: number


  @column()
  public title: string

  @column()
  public text: string

  @column()
  public type: string

  @column()
  public diller_id: number

  @belongsTo(() => Diller, {
    foreignKey: 'id'
  })
  public diller: BelongsTo<typeof Diller>

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
