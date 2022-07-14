import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";

import useProducts from "./../../hooks/useProducts";
import CardProduct from "./../../components/cards/CardProduct";
import useForm from "./../../hooks/useForm";

const CategoryPage = ({}) => {
  const [results, setResults] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, products] = useProducts(id);
  const [state, handleInputChange] = useForm({ search: "" });
  let { search } = state;

  useEffect(() => {
    setResults(products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);
  function handleReturn() {
    console.log("click");
    navigate(-1);
  }

  if (category === undefined) {
    return <div>Error</div>;
  }
  return (
    <div className="container mt-4 p-4 pb-5">
      <Helmet>
        <title>
          {category?.name ? `${category?.name} | Nacho Store` : "..."}
        </title>
      </Helmet>

      <header>
        <h2 className="pb-4 ">{category?.name}</h2>

        <div className="d-flex justify-content-between">
          <button className="btn" onClick={handleReturn}>
            <IoIosArrowBack />
          </button>
          <form className="form-search d-flex align-items-center mb-4 mb-sm-0 p-1">
            <IoIosSearch size="24" />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Productos"
              value={search}
              name="search"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </header>
      {results.length === 0 ? (
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start pt-3">
          {products?.map((p) => (
            <CardProduct key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start pt-3">
          {results?.map((p) => (
            <CardProduct key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
