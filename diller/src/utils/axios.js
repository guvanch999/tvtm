import axios from "axios";

const _axios = axios.create({
  // baseURL: "http://192.168.192.99:9186/api/",
  baseURL: "http://216.250.8.128:9186/api/",
});

export default _axios;
