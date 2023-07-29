// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Admin from "App/Models/Admin";
import Hash from "@ioc:Adonis/Core/Hash";
import AuthValidator from "App/Validators/AuthValidator";

export default class AdminsController {
  public async login({request, response, auth}: HttpContextContract) {
    const data = await request.validate(AuthValidator)

    const phone_number = data.phone_number.replace("+", "")
    const password = data.password

    // Lookup user manually
    const admin = await Admin
      .query()
      .where('phone_number', phone_number)
      .firstOrFail()

    // Verify password
    if (!(await Hash.verify(admin.password, password))) {
      return response.unauthorized('Invalid credentials')
    }

    // Generate token
    const token = await auth.use('api_admin').generate(admin)

    return response.ok({
      success: true,
      token
    })
  }

  public async getAdminList({response}: HttpContextContract) {
    let list = await Admin.all()
    return response.ok({
      success: true,
      data: list
    })
  }

  public async createAnotherAdminCredentials({request, response}: HttpContextContract) {
    const data = await request.validate(AuthValidator)
    const admin = await Admin.create(data)
    return response.ok({
      success: true,
      data: admin
    })
  }

  public async deleteAdminCredentials({response, params}: HttpContextContract) {
    const admin = await Admin.findBy('id', params.id)
    if (!admin) {
      return response.notFound({
        success: false,
        message: 'No admin found'
      })
    }
    await admin.delete()
    return response.ok({
      success: true
    })
  }

  public async updateAdminDetail({request, response, params}: HttpContextContract) {
    const data = await request.validate(AuthValidator)
    const admin = await Admin.findBy('id', params.id)
    if (!admin) {
      return response.notFound({
        success: false,
        message: 'No admin found'
      })
    }
    await admin.merge(data).save()
    return response.ok({
      success: true,
      data: admin
    })
  }
}
