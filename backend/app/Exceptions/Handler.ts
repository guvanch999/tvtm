/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    console.log(error)
    switch (error.code) {
      case 'E_UNAUTHORIZED_ACCESS': {
        return ctx.response.unauthorized({
          success: false,
          message: 'Unauthorized access'
        })
      }
      case 'E_VALIDATION_FAILURE': {
        return ctx.response.badRequest({
          success: false,
          data: error.messages??error.message
        })
      }
      case 'E_LOW_BALANCE_EXCEPTION': {
        return ctx.response.badRequest({
          success: true,
          message: "Balance is too low"
        })
      }
      case 'E_ROUTE_NOT_FOUND': {
        return ctx.response.notFound({
          success: true,
          message: "Route not found"
        })
      }
      case 'E_CANNOT_LOGIN': {
        return ctx.response.badRequest({
          success: true,
          message: "Cannot login with this credentials"
        })
      }
      default: {
        return ctx.response.status(500).send({
          success: false,
          message: 'Some error'
        });
      }
    }
  }
}
