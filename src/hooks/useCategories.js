import { useState, useEffect } from "react";
import { getAllCategories } from "./../services/api-shop";

const useCategories = (limit = null) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories(limit).then((resp) => {
      setData(resp);
      setCategories(resp);
    });
  }, []);
  function filterCategories(filter) {
    if (filter === "All") {
      setCategories(data);
      return;
    }
    const filterC = data.filter((category) => category.name === filter);
    setCategories(filterC);

    console.log(categories);
  }
  return [categories, data, filterCategories];
};

export default useCategories;
