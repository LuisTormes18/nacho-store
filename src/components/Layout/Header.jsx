import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import Cinta from "./Cinta";

import { openModalCart } from "./../../stateManagement/actions/shoppinCart";
import { openModalLogin } from "./../../stateManagement/actions/auth";
import ModalLogin from "./../modals/ModalLogin";
import ModalCart from "./../modals/ModalCart";

import "./index.css";

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
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link className="btn " to={`./profile`}>
                  Mi perfil
                </Link>
                <Link className="btn " to={`./pedidos`}>
                  Pedidos
                </Link>
                <button className="btn">Salir</button>
              </Dropdown.Menu>
            </Dropdown>
          )}

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
