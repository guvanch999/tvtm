import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Logs extends BaseModel {


  @column({isPrimary: true})
  public id: number

  @column()
  public action: string

  @column()
  public diller_id: number

  @column()
  public cardnumber: string

  @column()
  public diller: string

  @column()
  public client: string


  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
