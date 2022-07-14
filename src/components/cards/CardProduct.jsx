import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addProdutToCart } from "./../../stateManagement/actions/shoppinCart";
import { openModalOptions } from "./../../stateManagement/actions/ui";
import ButtonsChangeQuantity from "./ButtonsQuantity/ButtonsChangeQuantity";
import { formatPriceToUsd, isProductInCart } from "../../utils/utils";
import ModalProductOptions from "./../modals/ModalProductOptions";

import "./cards.css";

const CardProduct = ({ product }) => {
  const [InCart, setInCart] = useState(false);
  const {
    shoppingCart: { productsInCart },
    ui: { modalOptionsIsOpen },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isProductInCart(product.id, productsInCart)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [product, productsInCart]);

  function handleAddToCart() {
    if (product.properties.length === 0) {
      setInCart(true);
      dispatch(addProdutToCart({ ...product, quantity: 1 }));
      return;
    }
    dispatch(openModalOptions(product));
  }

  return (
    <div className="card card-product text-center ">
      <img
        src={product.picture_urls[0]}
        className="card-img-top"
        alt={product?.name}
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{product?.name}</h5>
        <div className="card-text">
          <p className="text-gray font-size-14px">{product?.details}</p>
          <span className="text-gray font-size-14px">
            {product?.custom_data.display_price}
          </span>
        </div>
        {!InCart ? (
          <button className="btn btn-outline-warning" onClick={handleAddToCart}>
            Agregar
          </button>
        ) : (
          <ButtonsChangeQuantity id={product.id} />
        )}
      </div>
      {modalOptionsIsOpen && <ModalProductOptions />}
    </div>
  );
};

export default CardProduct;
