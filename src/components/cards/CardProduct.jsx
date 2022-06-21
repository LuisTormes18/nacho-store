import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addProdutToCart,
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
} from "./../../stateManagement/actions/shoppinCart";

const CardProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function handleAddToCart() {
    setQuantity(1);
    dispatch(addProdutToCart({ ...product, quantity: 1, price: 20 }));
  }
  function handleIncrement() {
    setQuantity(quantity + 1);
    dispatch(incrementQuntityOfAProduct(product.id));
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
    dispatch(decrementQuntityOfAProduct(product.id));
  }

  return (
    <div className="card card-product text-center">
      <img src={product.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          <span>Some quick example text to build on the card title</span>
          <span>$20</span>
        </p>
        {quantity < 1 ? (
          <button className="btn btn-outline-warning" onClick={handleAddToCart}>
            Agregar
          </button>
        ) : (
          <div>
            <button
              className="btn btn-outline-warning"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="m-4">{quantity}</span>
            <button
              className="btn btn-outline-warning"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
