import instanceAxios from "./axios";

export const getAllCategories = async (limit) => {
  const resp = await instanceAxios.get("categories/all");
  const data = await resp.data;
  return data.categories;
};

export const getAllProductsByCategory = async (id) => {
  const resp = await instanceAxios.get(`categories/${id}`);
  const data = await resp.data;
  return data;
};
export const getHorario = async () => {
  const resp = await instanceAxios.get(`horarios`);
  const data = await resp.data;
  let date = new Date();
  let horario = data.horarios.find((h) => h.day === date.getDay());

  return horario;
};
export const getProductsBySearch = async (search) => {
  const resp = await instanceAxios.get(`search-product/?q=${search}`);
  const data = await resp.data;

  return data;
};
