import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Packet extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public packet: string

  @column()
  public price: string

  @column()
  public description: string

  @column()
  public access_criteria: string

  @column()
  public status: number

  @column()
  public promotion: number

  @column()
  public activation: number

  @column()
  public prodleniye: number

  @column()
  public srok: number

  @column()
  public type: string

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
