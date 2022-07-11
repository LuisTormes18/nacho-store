import { RowCategory } from "./../../components";
import { Helmet } from "react-helmet";

import useCategories from "./../../hooks/useCategories";

import "./index.css";
import SearchBar from "./components/SearchBar";
import CardProduct from "./../../components/cards/CardProduct";

const CategoriesPage = () => {
  const [categories, filters, filterCategories] = useCategories();
  const { results } = useSearch();
  return (
    <div className="pb-5">
      <Helmet>
        <title>Caregories | Nacho Store</title>
      </Helmet>

      <div className="categories-nav container d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between align-items-sm-start ">
        <ul className="categories-nav-filters d-flex  justify-content-center justify-content-sm-start flex-wrap">
          <li>
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
        <SearchBar />
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
