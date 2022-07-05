import { RowCategory } from "./../../components";
import { Helmet } from "react-helmet";
import { IoIosSearch } from "react-icons/io";

import useCategories from "./../../hooks/useCategories";

import "./index.css";

const CategoriesPage = () => {
  const [categories, filters, filterCategories] = useCategories();
  return (
    <div className="pb-5">
      <Helmet>
        <title>Caregories | Nacho Store</title>
      </Helmet>

      <div className="categories-nav container d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between align-items-sm-start ">
        <ul className="categories-nav-filters d-flex  justify-content-center justify-content-sm-start flex-wrap">
          <li
            className="item"
            onClick={() => {
              filterCategories("all");
            }}
          >
            <a className="" href="#">
              All
            </a>
          </li>
          {filters?.map((f) => (
            <li
              className="item"
              key={f.id}
              onClick={() => {
                filterCategories(f.title);
              }}
            >
              <a className="" href="#">
                {f.title}
              </a>
            </li>
          ))}
        </ul>
        <form className="form-search d-flex align-items-center mb-4 mb-sm-0 p-1">
          <IoIosSearch size="24" />
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar Productos"
          />
        </form>
      </div>
      <div className="categories">
        {categories?.map((c) => (
          <RowCategory key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
