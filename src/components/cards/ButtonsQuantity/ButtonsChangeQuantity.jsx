import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
} from "./../../../stateManagement/actions/shoppinCart";

const ButtonsChangeQuantity = ({ id }) => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = productsInCart.find((p) => p.id === id);
    if (product) {
      setQuantity(product.quantity);
    }
  }, [id, productsInCart]);

  function handleIncrement() {
    dispatch(incrementQuntityOfAProduct(id));
  }
  function handleDecrement() {
    dispatch(decrementQuntityOfAProduct(id));
  }

  return (
    <div>
      <button className="btn btn-outline-warning" onClick={handleDecrement}>
        -
      </button>
      <span className="m-4">{quantity}</span>
      <button className="btn btn-outline-warning" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ButtonsChangeQuantity;
