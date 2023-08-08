import BaseService from './BaseService'
import Log from 'App/Models/Logs'

type ActionsLogs = {
  action: string
  diller?: string
  client?: string
  cardnumber?: string
  diller_id?: number
}

export default class LogsService extends BaseService {
  constructor() {
    super(Log)
  }

  public async delete(id: number) {
    const service = await Log.findOrFail(id)
    await service.delete()
  }

  public async findOne(id: number): Promise<Log> {
    const service = await this.model.findOrFail(id)
    return service
  }

  public async create(
    data: ActionsLogs
  ): Promise<Log> {
    try {

      const contact = await Log.create({
        action: data.action,
        diller_id: data.diller_id,
        client: data.client,
        cardnumber: data.cardnumber,
        diller: data.diller
      })

      return contact
    } catch (err) {
      throw err
    }
  }
}
