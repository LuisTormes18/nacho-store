import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";

import useProducts from "./../../hooks/useProducts";
import CardProduct from "./../../components/cards/CardProduct";

const CategoryPage = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, products] = useProducts(id);

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
                <title>Nacho Store | {category}</title>
     </Helmet>

      <header>
        <h2 className="pb-4 ">{category?.title}</h2>

        <div className="d-flex justify-content-between">
          <button className="btn" onClick={handleReturn}>
            <IoIosArrowBack />
          </button>
          <form className="form-search d-flex align-items-center p-1">
            <IoIosSearch size="24" />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Producto en categoria"
            />
          </form>
        </div>
      </header>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between pt-3">
        {products?.map((p) => (
          <CardProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
