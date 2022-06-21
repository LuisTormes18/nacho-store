import { useEffect, useState } from "react";
import {
  getAllProductsByCategory,
  getCategoryById,
} from "./../services/api-shop";

const useProducts = (idCategory) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Promise.All
    Promise.all([
      getCategoryById(idCategory),
      getAllProductsByCategory(idCategory),
    ])
      .then((resp) => {
        setCategory(resp[0]);
        setProducts(resp[1]);
      })
      .catch((err) => {
        setCategory(undefined);
        console.log(err);
      });
  }, [idCategory]);
  return [category, products];
};

export default useProducts;
