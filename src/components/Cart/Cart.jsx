import { Link } from "react-router-dom";
import useCart from "./../../hooks/useCart";
import CartItem from "./CartItem";
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

      <div className="p-2 cart__body">
        {productsInCart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {/* footer */}

      <footer className="d-flex flex-column">
        <TotalCartValue text="SubTotal" />
        <hr />
        <Link className="btn btn-warning m-3" to={`./realizar-pago`}>
          Continuar con la compra
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
