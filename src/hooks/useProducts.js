import { useEffect, useState } from "react";
import { getAllProductsByCategory } from "./../services/api-shop";

const useProducts = (idCategory) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getAllProductsByCategory(idCategory)
      .then((resp) => {
        console.log(resp);
        setCategory(resp.category);
        setProducts(resp.products);
      })
      .catch((err) => {
        setCategory(undefined);
        console.log(err);
      });
  }, [idCategory]);
  return [category, products];
};

export default useProducts;
