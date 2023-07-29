import {DateTime} from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Diller from "App/Models/Diller";

export default class Client extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public cardnumber: string

  @column()
  public name: string

  @column()
  public note: string

  @column()
  public surname: string

  @column()
  public telnumber: string

  @column()
  public adress: string

  @column()
  public packet: string

  @column()
  public srok: number

  @column()
  public resiver: string

  @column({
    // serialize: (value => {
    //   if (value) {
    //     let date = new Date(+value)
    //     return date.toLocaleDateString("+05")
    //   } else {
    //     return null
    //   }
    // })
  })
  public date_start: string

  @column()
  public date_end: string

  @column()
  public diller_id: number

  @belongsTo(() => Diller, {foreignKey: 'diller_id', localKey: 'id'})
  public diller: BelongsTo<typeof Diller>

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
