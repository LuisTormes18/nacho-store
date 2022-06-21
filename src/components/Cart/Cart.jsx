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
        <h4>Tienes {productsInCart.length} producto</h4>
      </header>
      <hr />
      <div className="p-2 body">
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
      <footer className="container p-4 d-flex flex-column">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">Subtotal</span>
          <span>{getTotalCartValue(productsInCart)}$</span>
        </div>
        <hr />
        <button className="btn btn-warning">Continuar compra</button>
        <button className="btn " onClick={handleClearCart}>
          vaciar carrito
        </button>
      </footer>
    </div>
  );
};

export default Cart;
