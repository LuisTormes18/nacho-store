import instanceAxios from "./axios";

export const getAllCategories = async (limit) => {
  const resp = await instanceAxios.get("branches/131/categories/all");
  const data = await resp.data;
  return data.data;
};

export const getAllProductsByCategory = async (id) => {
  const getProducts = instanceAxios.get(`branches/131/branch-goods?category_id=${id}&with=properties`);
  const getCategory = instanceAxios.get(`categories/${id}`);

  const [categoryResp, productsResp] = await Promise.all([getCategory, getProducts]);
  console.log(categoryResp, productsResp)
  
  return {
        ok: true,
        category: categoryResp.data,
        products: productsResp.data.data,
      };
};

export const getHorario = async () => {
  const resp = await instanceAxios.get(`branches/131/work-schedules`);
  const data = await resp.data;
  let date = new Date();
  let horario = data.data.find((h) => h.day === date.getDay());
  return horario;

};
export const getProductsBySearch = async (search) => {
  const resp = await instanceAxios.get(`branches/131/branch-goods/search?q=${q}`)
  const data = await resp.data;
  return data;
};
