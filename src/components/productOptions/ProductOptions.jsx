import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModalOptions } from "../../stateManagement/actions/ui";
import { addProdutToCart } from "./../../stateManagement/actions/shoppinCart";
import Propierties from "./Propierties";
import { formatPriceToUsd } from "./../../utils/utils";

import "./style.css";

const ProductOptions = () => {
  const [counter, setCounter] = useState(1);
  const { productActive: product } = useSelector((state) => state.ui);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  function handleIncrement() {
    setCounter((counter) => counter + 1);
  }
  function handleDecrement() {
    setCounter((counter) => counter - 1);
  }
  function handleAddToCart() {
    dispatch(addProdutToCart({ ...product, quantity: counter }));
    dispatch(closeModalOptions());
  }
  useEffect(() => {
    setTotalPrice(`${product.min_price_e2}`.slice(0, 2) * counter);
  }, [counter]);
  return (
    <div className="options_content">
      <div className="row cols-2 justify-content-center justify-content-md-start">
        <div className="left row col-12 col-md-5">
          <picture className="image">
            <source
              srcset={`${product?.picture_urls[0]}`}
              media={`(max-width:759px)`}
            />
            <img
              className="img-fluid"
              src={product?.vertical_picture_urls[0]}
            />
          </picture>
        </div>
        <div className="right col-12 col-md-7">
          <header className="p-3 pb-0">
            <h5 className="card-title">{product?.name}</h5>
            <p className="text-gray font-size-14px">{product?.details}</p>
          </header>
          <hr />

          <Propierties
            properties={product.properties}
            setTotalPrice={setTotalPrice}
          />
          <footer className="p-3 d-flex justify-content-between flex-wrap">
            <div className="d-flex gap-2">
              <div>
                <button
                  className="btn btn-outline-warning"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="m-4">{counter}</span>
                <button
                  className="btn btn-outline-warning"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-outline-warning"
                onClick={handleAddToCart}
              >
                Agregar
              </button>
            </div>
            <div className=" ">{formatPriceToUsd(totalPrice)}</div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
