import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api-dev.dondemand.io/api/v3/companies/119/",
});

export default instanceAxios;
