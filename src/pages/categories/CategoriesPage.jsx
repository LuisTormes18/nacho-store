import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { IoIosSearch } from "react-icons/io";

import useCategories from "./../../hooks/useCategories";
import useForm from "./../../hooks/useForm";
import CardProduct from "./../../components/cards/CardProduct";
import { getProductsBySearch } from "../../services/api-shop";
import RowCategory from "./components/RowCategory";

import "./index.css";

const CategoriesPage = () => {
  const [categories, filters, filterCategories] = useCategories();
  const [results, setResults] = useState([]);
  const [state, hanledInputChange] = useForm({ search: "" });
  let { search } = state;

  useEffect(() => {
    getProductsBySearch(search).then((resp) => {
      console.log("resp", resp);
      setResults(resp.result);
    });
  }, [search]);

  return (
    <div className="pb-5">
      <Helmet>
        <title>Caregories | Nacho Store</title>
      </Helmet>

      <div className="categories-nav container d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between align-items-sm-start ">
        <ul className="categories-nav-filters d-flex  justify-content-center justify-content-sm-start flex-wrap">
          <li key="all">
            <button
              className="item"
              onClick={() => {
                filterCategories("all");
              }}
            >
              All
            </button>
          </li>
          {filters?.map((f) => (
            <li key={f.id}>
              <button
                className="item"
                onClick={() => {
                  filterCategories(f?.name);
                }}
              >
                {f?.name}
              </button>
            </li>
          ))}
        </ul>
        <form className="form-search d-flex align-items-center mb-4 mb-sm-0 p-1">
          <IoIosSearch size="24" />
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar Productos"
            value={search}
            name="search"
            onChange={hanledInputChange}
          />
        </form>
      </div>
      {results.length === 0 ? (
        <div className="categories">
          {categories?.map((c) => (
            <RowCategory key={c.id} category={c} />
          ))}
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center pt-3">
          {results?.map((p) => (
            <CardProduct key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
