import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProdutToCart,
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
} from "./../../stateManagement/actions/shoppinCart";

const CardProduct = ({ product }) => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const [conter, setConter] = useState(0);

  function handleAddToCart() {
    setConter(1);

    product.quantity = 1;
    dispatch(addProdutToCart(product));
  }
  function handleIncrement() {
    setConter((conter) => conter + 1);

    dispatch(incrementQuntityOfAProduct(product.id));
  }
  function hadleDecrement() {
    setConter((conter) => conter - 1);

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
        {conter < 1 ? (
          <button className="btn btn-outline-warning" onClick={handleAddToCart}>
            Agregar
          </button>
        ) : (
          <div>
            <button
              className="btn btn-outline-warning"
              onClick={hadleDecrement}
            >
              -
            </button>
            <span className="m-4">{conter}</span>
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
