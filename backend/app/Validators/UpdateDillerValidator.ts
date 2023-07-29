import {schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class UpdateDillerValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    full_name: schema.string.optional(),
    skidka: schema.number.optional(),
    password: schema.string.optional(),
    email: schema.string.optional([
      rules.email()
    ])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
