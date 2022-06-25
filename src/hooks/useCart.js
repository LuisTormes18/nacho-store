import { useDispatch } from "react-redux";
import {
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
  clearCart,
  removeProdutFromCart,
} from "./../stateManagement/actions/shoppinCart";

const useCart = () => {
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
    handleIncrement,
    handleDecrement,
    handleClearCart,
    handleDelete,
  };
};

export default useCart;
