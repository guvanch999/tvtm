import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Balan from "App/Models/Balan";
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class BalansHistory extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public type: string

  @column()
  public sum: number

  @column()
  public action: string

  @column()
  public balans_id: number

  @belongsTo(() => Balan, {localKey: "balans_id", foreignKey: "id"})
  public balans: BelongsTo<typeof Balan>

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
