import {get_token} from "App/Helpers/TokenHandler";
import axios from "axios";
import Client from "App/Models/Client";
import Packet from "App/Models/Packet";
import {HttpException} from "@adonisjs/http-server/build/src/Exceptions/HttpException";


async function get_client_by_cardnumber(cardnumber: string) {
  let token = get_token()
  let {data} = await axios.get('https://tmalem.tv/api/diller/getclient', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      cardnumber
    }
  })
  return data
}

export async function create_card(client: Client) {
  let token = get_token()
  try {
    const {data} = await axios.post('https://alemtv.tm/api/diller/client', {
        cardnumber: client.cardnumber,
        name: client.name,
        surname: client.surname,
        adress: client.adress,
        telnumber: client.telnumber,
        packet: client.packet,
        srok: client.srok,

      }, {
        headers:
          {
            Authorization: `Bearer ${token}`
          },
      },
    )
    if (!data.status) {
      throw new HttpException(data.message, 400, 'E_REGISTERED_EXCEPTION')
    }
    let client_data = await get_client_by_cardnumber(client.cardnumber)
    client.date_start = client_data.date_start
    client.date_end = client_data.date_end
    await client.save()

    return client
  } catch (e) {
    throw e
  }
}


export async function load_packets() {
  let token = get_token()
  try {
    let {data} = await axios.get('https://tmalem.tv/api/diller/packets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    throw err
  }
}


export async function re_new_card(client: Client) {
  let token = get_token()
  try {
    await axios.post('https://tmalem.tv/api/diller/renevald_Card', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        cardnumber: client.cardnumber,
        packet: client.packet,
        srok: client.srok
      }
    })
    let client_data = await get_client_by_cardnumber(client.cardnumber)
    console.log(client_data)
    client.date_start = client_data.date_start
    client.date_end = client_data.date_end
    await client.save()
    return client
  } catch (err) {
    throw err
  }
}

export async function extend_card(params) {
  let token = get_token()
  try {
    await axios.post('https://tmalem.tv/api/diller/renevald_Card', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params
    })
  } catch (err) {
    throw err
  }
}


export async function reactivate_card(cardnumber: string) {
  let token = get_token()
  try {
    await axios.get('https://tmalem.tv/api/diller/reactivation', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        cardnumber
      }
    })
  } catch (err) {
    throw err
  }
}


export async function sync_packets() {
  let token = get_token()

  try {
    let {data} = await axios.get('https://tmalem.tv/api/diller/packets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    await Packet.truncate()
    await Packet.createMany(data.packets)
  } catch (err) {
    throw err
  }
}

export async function card_replacement(client: Client, new_card_data) {
  let token = get_token()

  try {
    console.log('sending request')
    console.log(new_card_data)
    await axios.post('https://alemtv.tm/api/diller/card_replacement', {
        "oldCard": new_card_data.cardnumber,
        "newCard": new_card_data.new_cardnumber,
        "reason": new_card_data.reason
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 5000
      })
    console.log('request is finished')
    let client_data = await get_client_by_cardnumber(client.cardnumber)

    client.cardnumber = new_card_data.new_cardnumber
    client.srok = client_data.srok
    client.packet = client_data.active_packet
    client.date_start = client_data.date_start
    client.date_end = client_data.date_end
    await client.save()
  } catch (err) {
    console.error(err)
    throw new HttpException("This is timeout exception. It occurs due to incorrect data", 400, 'E_AXIOS_TIMEOUT')
  }

}

export async function search_card(cardnumber: string) {
  let token = get_token()
  try {
    let {data} = await axios.get('https://tmalem.tv/api/diller/getclient', {
      params: {
        cardnumber
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (data.error) {
      throw new HttpException("Kard tapylmady", 400, 'E_VALIDATION_FAILURE')
    }
    return data
  } catch (err) {
    throw err
  }
}
