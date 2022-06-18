import { useState, useEffect } from "react";

import { RowCategory } from "./../../components";
import { getAllCategories } from "./../../services/api-shop";
import { IoIosSearch } from "react-icons/io";

import "./index.css";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <div>
      <div className="categories-nav container d-flex justify-content-between align-items-start">
        <ul className="categories-nav-filters d-flex justify-content-start flex-wrap">
          <li className="item">
            <a className="" href="#">
              All
            </a>
          </li>
          {categories?.map((c) => (
            <li className="item" key={c.id}>
              <a className="" href="#">
                {c.title}
              </a>
            </li>
          ))}
        </ul>
        <form className="d-flex align-items-center p-1">
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
