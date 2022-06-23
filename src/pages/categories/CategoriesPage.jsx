import { RowCategory } from "./../../components";
import { IoIosSearch } from "react-icons/io";

import useCategories from "./../../hooks/useCategories";

import "./index.css";

const CategoriesPage = () => {
  const [categories, filters, filterCategories] = useCategories();
  return (
    <div className="pb-5">
      <div className="categories-nav container d-flex justify-content-between align-items-start">
        <ul className="categories-nav-filters d-flex justify-content-start flex-wrap">
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
        <form className="form-search d-flex align-items-center p-1">
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
