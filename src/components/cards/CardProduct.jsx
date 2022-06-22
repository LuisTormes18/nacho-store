import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addProdutToCart } from "./../../stateManagement/actions/shoppinCart";
import ButtonsChangeQuantity from "./ButtonsQuantity/ButtonsChangeQuantity";
import { isProductInCart } from "../../utils/utils";

const CardProduct = ({ product }) => {
  const [InCart, setInCart] = useState(false);
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isProductInCart(product.id, productsInCart)) {
      setInCart(true);
    }else{
      setInCart(false)
    }
  }, [product, productsInCart]);

  function handleAddToCart() {
    setInCart(true);
    dispatch(addProdutToCart({ ...product, quantity: 1, price: 20 }));
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
