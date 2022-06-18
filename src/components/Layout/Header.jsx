import { useSelector, useDispatch } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

import { openModalContainer } from "./../../stateManagement/actions/ui";
import ModalContainer from "./../modal/ModalContainer";
import FormLogin from "./../auth/FormLogin";
import Cinta from "./Cinta";

import "./index.css";

const Header = () => {
  const {
    shoppingCart: { productsInCart },
    ui,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Authentucacion de usuario
  function handleAuthentication() {
    dispatch(openModalContainer());
  }
  return (
    <header className="header">
      <div className="container mt-2 mb-2 d-flex justify-content-between align-items-center">
        <a href="/">
          <img
            className="logo"
            src="https://shopsqa.lukapay.io/static/nachoLogoG-144ac61f9c3fe85097f152cd0e0128c9.jpg"
          />
        </a>
        <div className="header-nav d-flex align-items-center">
          <button className="btn btn-login me-2" onClick={handleAuthentication}>
            Ingresar
          </button>

          <div className="shoppingCart">
            <button className={`btn-cart ${productsInCart > 0 && "bg-orange"}`}>
              <MdShoppingCart />
              <span>{productsInCart}</span>
            </button>
          </div>
        </div>
      </div>
      {/*cinta de apertura*/}
      <Cinta />
      {/*  abrir el modal para authenticar al usuario */}
      {ui.modalIsOpen && (
        <ModalContainer>
          <FormLogin />
        </ModalContainer>
      )}
    </header>
  );
};

export default Header;
