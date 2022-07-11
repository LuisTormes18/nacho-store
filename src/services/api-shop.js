import instanceAxios from "./axios";
import { dataprueba } from "./dataprueba";

export const getAllCategories = async (limit) => {
  let n = limit ? limit : -1
  const resp = await instanceAxios.get("categories/all");
  const data = await resp.data;
  return data.categories;
  // return data.categories.slice(0, n);
};

export const getAllProductsByCategory = async (id) => {
  const resp = await instanceAxios.get(`categories/${id}`);
  const data = await resp.data;
  return data;

};
