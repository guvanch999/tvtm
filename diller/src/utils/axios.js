import axios from "axios";

const _axios = axios.create({
  // baseURL: "http://216.250.8.128:9186/api/",
  baseURL: "http://217.174.233.210:8080/api/",
});

export default _axios;
