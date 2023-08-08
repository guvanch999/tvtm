import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Diller from "App/Models/Diller";
import {format_date_time} from "App/Helpers/dateTimeFormatter";

export default class ChangeNotification extends BaseModel {
  public static table = "change_card_not"
  @column({isPrimary: true})
  public id: number

  @column()
  public cardnumber: string

  @column()
  public new_cardnumber: string

  @column()
  public reason: string

  @column()
  public status: string

  @column()
  public diller_id: number

  @column()
  public is_new: boolean

  @belongsTo(() => Diller, {
    localKey: 'id',
    foreignKey: 'diller_id'
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
