import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instanceAxios;
