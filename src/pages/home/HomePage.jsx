import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowForward } from "react-icons/io";

import useCategories from "./../../hooks/useCategories";
import { CardCategory } from "./../../components";
import "./home.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const [categories] = useCategories();

  return (
    <div className="home-page">
    <Helmet>
                <title>Nacho Store | Home</title>
     </Helmet>


      <div className="banner"></div>
      <section className="section-categories">
        <div className="p-2 text-end">
          <Link className="btn" to="/categories">
            <span>
              Ver todas <IoIosArrowForward />
            </span>
          </Link>
        </div>
        <div className="container d-flex justify-content-start flex-wrap">
          {categories?.map((c) => (
            <CardCategory key={c.id} category={c} />
          ))}
        </div>
      </section>

      <div className="container ps-2 pe-2 ">
        <hr />
      </div>

      {/* Section About */}
      <section className="section-about container">
        <div className="row ">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded-3"
              src="https://shopsqa.lukapay.io/static/noticias-e948f92199db156bda9089fe8249eb25.jpeg"
              alt=""
            />
          </div>

          <div className="col-12 col-md-6 p-3 pt-md-0">
            <h2>Nacho Shop</h2>
            <h4>Abrimos nuestra tienda fisica!</h4>
            <p className="font-size-14px text-gray">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
