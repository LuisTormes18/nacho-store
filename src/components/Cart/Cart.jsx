import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import useCart from "./../../hooks/useCart";
import { getTotalCartValue } from "./../../utils/utils";

import "./cart.css";

const Cart = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const { handleClearCart, handleIncrement, handleDecrement, handleDelete } =
    useCart();
  return (
    <div className="h-100 cart">
      <header className="p-3 pb-0">
        <h4 className="text-bold">Tienes {productsInCart.length} producto</h4>
      </header>
      <hr />
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
      <footer className="d-flex flex-column">
        <div className="d-flex justify-content-between p-3 pb-0">
          <span className="text-bold">SubTotal</span>
          <span className="text-bold">
            {getTotalCartValue(productsInCart)}$
          </span>
        </div>
        <hr />
        <button className="btn btn-warning m-3">Continuar compra</button>
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
