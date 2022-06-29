import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

import Cinta from "./Cinta";

import "./index.css";
import { openModalCart } from "./../../stateManagement/actions/shoppinCart";
import { openModalLogin } from "./../../stateManagement/actions/auth";
import ModalLogin from "./../modals/ModalLogin";
import ModalCart from "./../modals/ModalCart";

const Header = () => {
  const {
    shoppingCart: { productsInCart, modalCartIsOpen },
    auth: { user, modalLoginIsOpen },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Authentucacion de usuario
  function handleOpenModalAuthentication() {
    dispatch(openModalLogin());
  }
  function handleOpenModalCart() {
    dispatch(openModalCart());
  }
  return (
    <header className="header">
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img
            className="logo img-fluid"
            src="https://shopsqa.lukapay.io/static/nachoLogoG-144ac61f9c3fe85097f152cd0e0128c9.jpg"
          />
        </Link>
        <div className="header-nav d-flex align-items-center">
          {!user ? (
            <button
              className="btn btn-login me-2"
              onClick={handleOpenModalAuthentication}
            >
              Ingresar
            </button>
          ) : (
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          )}

          {/*<Link className="btn " to={`./profile`}>
              {user?.name}
            </Link>*/}
          <div className="shoppingCart">
            <button
              className={`btn-cart ${productsInCart.length > 0 && "bg-orange"}`}
              onClick={handleOpenModalCart}
            >
              <MdShoppingCart />
              <span>{productsInCart.length}</span>
            </button>
          </div>
        </div>
      </div>
      {/*cinta de apertura*/}
      <Cinta />
      {/*  abrir el modal para authenticar al usuario */}
      {modalLoginIsOpen && <ModalLogin />}

      {/*  abrir el modal para ver el carrito */}
      {modalCartIsOpen && <ModalCart />}
    </header>
  );
};

export default Header;
