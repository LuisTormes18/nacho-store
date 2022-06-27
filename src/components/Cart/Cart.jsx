import { Link } from "react-router-dom";
import useCart from "./../../hooks/useCart";
import CartListProducts from "./CartListProducts";
import TotalCartValue from "./TotalCartValue";

import "./cart.css";

const Cart = ({}) => {
  const { productsInCart, handleClearCart } = useCart();

  return (
    <div className="h-100 cart">
      <header className="p-3 pb-0">
        <h4 className="text-bold">Tienes {productsInCart.length} producto</h4>
      </header>
      <hr />
      {/*Lista de productos en el carrito*/}

      <CartListProducts />

      {/* footer */}

      <footer className="d-flex flex-column">
        <TotalCartValue text="SubTotal" />
        <hr />
        <Link className="btn btn-warning m-3" to={`./realizarPago`}>
          Continuar compra
        </Link>
        <button
          className="btn btn-clear-cart m-5 mt-0"
          onClick={handleClearCart}
        >
          vaciar carrito
        </button>
      </footer>
    </div>
  );
};

export default Cart;
