import { BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class BaseService {
  protected model

  constructor(model: typeof BaseModel) {
    this.model = model
  }
  public async findAll() {
    return await this.model.all()
  }
}
