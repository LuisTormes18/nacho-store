import { useState, useEffect } from "react";
import { getPrincipalCategories } from "./../services/api-shop";

const useCategories = (limit) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getPrincipalCategories().then((resp) => {
      setData(resp);
      setCategories(resp);
    });
  }, []);
  function filterCategories(filter) {
    if (filter === "all") {
      setCategories(data);
      return;
    }
    const filterC = data.filter((category) => category.title === filter);
    setCategories(filterC);

    console.log(categories);
  }
  return [categories, data, filterCategories];
};

export default useCategories;
