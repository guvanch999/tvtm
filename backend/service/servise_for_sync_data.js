const axios = require('axios')
const {Client} = require('pg')
const pg_client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'tvtm',
  password: 'fib11235813',
  port: 5432,
})
pg_client.connect(async function (err) {
  if (err) throw err;
});
let clients = []
let token = null

let update_query_string = ``

async function login() {
  const {data} = await axios.post('https://billing.alemtv.tm/api/auth', {
    "telnumber": "99365965102",
    "password": "begaforever"
  })
  token = data.token
  console.log('login is successfully')
}

async function connectToDb() {
  let res = await pg_client.query('select * from clients')
  clients = res.rows
  console.log('connect is successfully')
}

function compare(old_data, new_data) {
  let isEqual = true

  for (let prop in new_data) {
    if (prop !== 'activ_packet') {
      if (old_data[prop] !== new_data[prop]) {
        isEqual = false
      }
    } else {
      if (old_data.packet !== new_data.activ_packet) {
        isEqual = false
      }
    }
  }
  return isEqual
}

function prepea_sql_query(data) {
  return `update clients set
  name = '${data.name}',
  surname = '${data.surname}',
  telnumber = '${data.telnumber}',
  adress = '${data.adress}',
  packet = '${data.activ_packet}',
  date_start = '${data.date_start}',
  date_end = '${data.date_end}'
  where cardnumber = '${data.cardnumber}'; `
}

function compare_and_push(index, data) {
  if (!compare(clients[index], data)) {
    update_query_string += '\n' + prepea_sql_query(data)
  }
}

async function checkUser(index) {
  return new Promise(async (resolve, reject) => {
    let {data} = await axios.get('https://tmalem.tv/api/diller/getclient?cardnumber=' + clients[index].cardnumber, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    compare_and_push(index, data)
    resolve()
  })
}

async function run_sync() {
  try {
    await login()
    await connectToDb()

    let index = 0
    let promise_functions = []
    while (index < clients.length) {
      promise_functions.push(
        checkUser(index)
      )
      index++
      if (index % 10 === 0) {
        await Promise.all(promise_functions)
        promise_functions = []
      }
    }
    console.log("while is outed")
    if (promise_functions.length) {
      await Promise.all(promise_functions)
    }
    console.log(update_query_string)
    await pg_client.query(update_query_string)
    console.log("Sync is successfully")
  } catch (err) {
    throw err
  }
}

function start() {
  setTimeout(async function () {
    console.log(formatDate());
    await run_sync()
    start()
  }, 1000 * 60 * 60)
}


start()
console.log('Sync server is started')

function formatDate() {
  let date = new Date()
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds()
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ':' + (seconds > 9 ? seconds : '0' + seconds) + ' ' + ampm;
  return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
