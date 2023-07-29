import axios from "axios";

const login = async function () {
  return await axios.post('https://tmalem.tv/api/auth',
    {
      "telnumber": "99365965102",
      "password": "begaforever"
    })
}

export = login
