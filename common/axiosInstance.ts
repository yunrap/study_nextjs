import axios from "axios";

const InstanceAxios = axios.create({
  baseURL: "http://localhost:3000/v1/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default InstanceAxios;
