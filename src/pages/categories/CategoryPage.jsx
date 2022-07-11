import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";

import useProducts from "./../../hooks/useProducts";
import CardProduct from "./../../components/cards/CardProduct";
import useSearch from "./../../hooks/useSearch";
import SearchBar from "./components/SearchBar";

const CategoryPage = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, products] = useProducts(id);
  const { results } = useSearch();

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
          <SearchBar product={products} />
        </div>
      </header>
      {results.length === 0 ? (
        <div className="d-flex flex-wrap justify-content-center pt-3">
          {products?.map((p) => (
            <CardProduct key={p.id} product={p} />
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

export default CategoryPage;
