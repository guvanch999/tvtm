import axios from "axios";

const _axios = axios.create({
  baseURL: "http://94.103.93.245:9186:9186/api/",
});

export default _axios;
