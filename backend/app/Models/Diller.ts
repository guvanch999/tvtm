import {DateTime} from 'luxon'
import {BaseModel, beforeSave, column, HasMany, hasMany, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Hash from "@ioc:Adonis/Core/Hash";
import Balan from "App/Models/Balan";
import Client from "App/Models/Client";
import News from "App/Models/News";

export default class Diller extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public phone_number: string

  @column({serializeAs: null})
  public password: string

  @column()
  public password_save: string

  @column()
  public full_name: string

  @column()
  public email: string

  @column()
  public skidka: number


  @column()
  public client_count: number

  @hasOne(() => Balan, {localKey: 'id', foreignKey: 'diller_id'})
  public balans: HasOne<typeof Balan>

  @hasMany(() => Client, {})
  public clients: HasMany<typeof Client>


  @hasMany(() => News, {localKey: "id", foreignKey: "diller_id"})
  public news: HasMany<typeof News>

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(diller: Diller) {
    if (diller.$dirty.password) {
      diller.password = await Hash.make(diller.password)
    }
  }
}
