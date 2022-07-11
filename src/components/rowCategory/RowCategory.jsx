import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import CardProduct from "./../cards/CardProduct";
import { getAllProductsByCategory } from "./../../services/api-shop";

const RowCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProductsByCategory(category.id).then((resp) => {
      setProducts(resp.products);

    });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between p-3">
        <h2 className="pb-4 ">{category?.name}</h2>
        <Link className="btn" to={`./${category?.id}`}>
          <span>
            Ver todos <IoIosArrowForward />
          </span>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
        {products?.map((p) => (
          <CardProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RowCategory;
