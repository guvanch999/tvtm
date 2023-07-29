import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Diller from "App/Models/Diller";

export default class Balan extends BaseModel {
  public static table = "balans"
  @column({isPrimary: true})
  public id: number

  @column()
  public diller_id: number

  @column()
  public summ: number

  @belongsTo(() => Diller, {
    localKey: 'diller_id',
    foreignKey: 'id'
  })
  public diller: BelongsTo<typeof Diller>

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
