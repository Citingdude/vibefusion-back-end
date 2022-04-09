import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Page extends BaseModel {
  @column({ isPrimary: true })
  public id: Number

  @column()
  public slug: String

  @column()
  public title: String

  @column()
  public image: String

  @column()
  public content: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
