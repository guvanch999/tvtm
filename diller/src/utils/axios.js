import axios from "axios";

const _axios = axios.create({
  // baseURL: "http://216.250.9.74:9186/api/",
  baseURL: "http://localhost:9186/api/",
});

export default _axios;
