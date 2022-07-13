import axios from "axios";

const instanceAxios = axios.create({
  // baseURL: "http://localhost:4000/api/",
  baseURL: "https://api-nacho-store.vercel.app/api/",
});

export default instanceAxios;
