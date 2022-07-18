import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useCart from "./../../hooks/useCart";
import CartItem from "./CartItem";
import TotalCartValue from "./TotalCartValue";
import { closeModalCart } from "./../../stateManagement/actions/shoppinCart";
import { ButtonClose } from "../common";

import "./cart.css";

const Cart = ({}) => {
  const {
    productsInCart,
    handleClearCart,
    handleDecrement,
    handleIncrement,
    handleDelete,
  } = useCart();

  const { modalCartIsOpen } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  function handleCloseModal() {
    dispatch(closeModalCart());
  }

  return (
    <div className="h-100 cart">
      <header className="p-3 pb-0  d-flex justify-content-between align-items-start">
        <h4 className="text-bold">Tienes {productsInCart.length} producto</h4>
        <ButtonClose handleClose={handleCloseModal} />
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
        <Link
          className="btn btn-warning m-3"
          onClick={handleCloseModal}
          to={`./realizar-pago`}
        >
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
