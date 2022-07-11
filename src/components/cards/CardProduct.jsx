import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addProdutToCart } from "./../../stateManagement/actions/shoppinCart";
import ButtonsChangeQuantity from "./ButtonsQuantity/ButtonsChangeQuantity";
import { formatPriceToUsd, isProductInCart } from "../../utils/utils";

const CardProduct = ({ product }) => {
  const [InCart, setInCart] = useState(false);
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isProductInCart(product.id, productsInCart)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [product, productsInCart]);

  function handleAddToCart() {
    setInCart(true);
    dispatch(addProdutToCart({ ...product, quantity: 1 }));
  }

  return (
    <div className="card card-product text-center">
      <img src={product.picture_urls[0]} className="card-img-top" alt={product?.name} />
      <div className="card-body">
        <h5 className="card-title">{product?.name}</h5>
        <div className="card-text">
          <p className="text-gray font-size-14px">{product?.details}</p>
          <span className="text-gray font-size-14px">{product?.custom_data.display_price}</span>

        </div>
        {!InCart ? (
          <button className="btn btn-outline-warning" onClick={handleAddToCart}>
            Agregar
          </button>
        ) : (
          <ButtonsChangeQuantity id={product.id} />
        )}
      </div>
    </div>
  );
};

export default CardProduct;
