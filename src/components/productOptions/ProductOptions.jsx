import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModalOptions } from "../../stateManagement/actions/ui";
import { formatPriceToUsd } from "./../../utils/utils";

const ProductOptions = () => {
  const [counter, setCounter] = useState(1);
  const { productActive: product } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function colors() {
    let colorData = product?.properties[0].property_options;
    const argColors = [];

    for (let i = 1; i < colorData.length; i++) {
      console.log(colorData[i]);
      argColors.push(
        <div className="d-flex justify-content-between">
          <div>
            <input
              className="ps-2"
              key={`${colorData[i].property_id}`}
              type="radio"
              id={`colorChoice${i}`}
              name={colorData[i].name}
              value={colorData[i].name}
            />
            <label for={`colorChoice${i}`}>{colorData[i].name}</label>
          </div>
          <span>
            {formatPriceToUsd(`${colorData[i].price_e2}`.slice(0, 2))}
          </span>
        </div>
      );
    }

    return argColors;
  }
  function sizes() {
    const argSizes = [];

    try {
      let sizesData = product?.properties[1].property_options;
      for (let i = 1; i < sizesData.length; i++) {
        console.log(sizesData[i]);
        argSizes.push(
          <div>
            <input
              key={`${sizesData[i].property_id}`}
              type="radio"
              id={`sizesChoice${i}`}
              name={sizesData[i].name}
              value={sizesData[i].name}
            />
            <label for={`sizesChoice${i}`}>{sizesData[i].name}</label>
          </div>
        );
      }
    } catch (err) {
      console.log("not sizes");
    }

    return argSizes;
  }
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
  return (
    <div className="modal_options_content">
      <div className="row cols-2 ">
        <div className="left row col-12 col-md-5">
          <picture>
            <img
              className="img-fluid"
              src={product?.picture_urls[0]}
              alt={product?.name}
            />
          </picture>
        </div>
        <div className="right col-12 col-md-7">
          <header className="p-3 pb-0">
            <h5 className="card-title">{product?.name}</h5>
            <p className="text-gray font-size-14px">{product?.details}</p>
          </header>

          <hr />
          <div className="clors">
            <h5 className="card-title">Color</h5>
            <form>{colors()}</form>
          </div>
          <hr />
          <div className="sizes">
            <h5 className="card-title">Talla Hombre</h5>
            <form>{sizes()}</form>
          </div>
          <hr />
          <footer className="d-flex justify-content-between">
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
            <div>
              {formatPriceToUsd(
                `${product.min_price_e2}`.slice(0, 2) * counter
              )}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
