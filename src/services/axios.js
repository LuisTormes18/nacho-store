import axios from "axios";

const instanceAxios = axios.create({
  // baseURL: "http://localhost:4000/api/",
  baseURL: "https://api-nacho-store.herokuapp.com/api/",
});

export default instanceAxios;
