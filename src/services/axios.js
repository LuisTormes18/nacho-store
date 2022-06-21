import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  // baseURL: "https://ali-express1.p.rapidapi.com",
});

export default instanceAxios;
