import instanceAxios from "./axios";

export const getPrincipalCategories = async () => {
  return [
    {
      id: "0001",
      title: "Franelas y sueters",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3025_1630344564.jpg",
    },
    {
      id: "0002",
      title: "Gorras",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3028_1630344543.jpg",
    },
    {
      id: "0003",
      title: "Accesorios para celulares",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3029_1630344580.jpg",
    },
  ];
};

export const getAllCategories = async () => {
  return [
    {
      id: "0001",
      title: "Franelas y sueters",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3025_1630344564.jpg",
    },
    {
      id: "0002",
      title: "Gorras",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3028_1630344543.jpg",
    },
    {
      id: "0003",
      title: "Accesorios para celulares",
      url: "https://api-dev.dondemand.io/storage/companies/2/category/category_3029_1630344580.jpg",
    },
  ];
};

export const getAllProductsByCategory = async () => {
  const resp = await instanceAxios.get("/photos");
  return resp.data.slice(0, 4);
};
