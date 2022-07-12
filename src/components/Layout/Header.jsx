import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import Cinta from "./Cinta";

import { openModalCart } from "./../../stateManagement/actions/shoppinCart";
import { openModalLogin } from "./../../stateManagement/actions/auth";
import ModalLogin from "./../modals/ModalLogin";
import ModalCart from "./../modals/ModalCart";
import Logo from "./../logo/Logo";
import useAuth from "./../../hooks/useAuth";

import "./index.css";

const Header = () => {
  const { user, handleLogout } = useAuth();

  const {
    shoppingCart: { productsInCart, modalCartIsOpen },
    auth: { modalLoginIsOpen },
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
          <Logo />
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
                <hr />
                <button className="btn" onClick={handleLogout}>
                  Salir
                </button>
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
