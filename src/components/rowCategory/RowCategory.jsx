import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import CardProduct from "./../cards/CardProduct";
import { getAllProductsByCategory } from "./../../services/api-shop";

const RowCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProductsByCategory().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2 className="pb-4 ">{category.title}</h2>
        <Link className="btn" to={`./${category.id}`}>
          <span>
            Ver todas <IoIosArrowForward />
          </span>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {products?.map((p) => (
          <CardProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RowCategory;
