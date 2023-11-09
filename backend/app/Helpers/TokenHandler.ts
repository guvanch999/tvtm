import LoginDatum from "App/Models/LoginDatum";
import axios from "axios";

import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";

let token: string | null = null

export function get_token() {
  return token
}

export function set_token(_token: string) {
  token = _token
}

async function get_user_and_login() {
  let loginData = await LoginDatum.query().first()
  if (!loginData) {
    throw new Error("No login data found")
  }
  return await axios.post('https://billing.alemtv.tm/api/auth',
    {
      telnumber: loginData.telnumber,
      password: loginData.password
    }
  )
}


export async function login_and_start() {
  try {
    const {data} = await get_user_and_login()
    token = data.token
  } catch (error) {
    console.log(error)
    throw error
  }
}


export async function start_token_refresh_timer() {
  await login_and_start()
  console.log(get_token())
  setTimeout(async function () {
    await start_token_refresh_timer()
  }, 60 * 60 * 1000)
}


export async function try_login(telnumber: string, password: string) {
  try {
    const {data} = await axios.post('https://billing.alemtv.tm/api/auth',
      {
        telnumber,
        password
      })
    return data.token
  } catch (e) {
    throw new HttpException("Cannot login with this credentials.", 400, 'E_CANNOT_LOGIN')
  }
}
