import { useState, useEffect } from "react";
import { getProductsBySearch } from "../services/api-shop";

const useSearch = (products = null) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log(search);

    if (products) {
      products.filter((product) => product.name.includes(search));
      return;
    }
    getProductsBySearch(search).then((resp) => setResults(resp));
  }, [search]);

  function hanleInputchange({ target }) {
    setSearch(target.value);
  }
  function reset(newState = initialState) {
    setState(newState);
  }
  return { results, hanleInputchange, reset, search };
};

export default useSearch;
