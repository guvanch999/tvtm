import {get_token} from "App/Helpers/TokenHandler";
import axios from "axios";
import Client from "App/Models/Client";
import Packet from "App/Models/Packet";


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

export async function get_news() {
  let token = get_token()
  try {
    let {data} = await axios.get('https://tmalem.tv/api/diller/news', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data.newsList
  } catch (err) {
    throw err
  }
}


export async function create_card(client: Client) {
  let token = get_token()
  try {
    await axios.post('https://alemtv.tm/api/diller/client', {
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
