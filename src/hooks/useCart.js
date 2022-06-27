import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
  clearCart,
  removeProdutFromCart,
} from "./../stateManagement/actions/shoppinCart";

const useCart = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  function handleIncrement(id) {
    dispatch(incrementQuntityOfAProduct(id));
  }
  function handleDecrement(id) {
    dispatch(decrementQuntityOfAProduct(id));
  }
  function handleClearCart() {
    dispatch(clearCart());
  }
  function handleDelete(id) {
    dispatch(removeProdutFromCart(id));
  }
  return {
    productsInCart,
    handleIncrement,
    handleDecrement,
    handleClearCart,
    handleDelete,
  };
};

export default useCart;
