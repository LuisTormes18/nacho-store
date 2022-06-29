import { useSelector } from "react-redux";
import { calculateTotalCartValue } from "./../utils/utils";

const useTotalCartValue = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const total = calculateTotalCartValue(productsInCart) || 0;

  return { total };
};

export default useTotalCartValue;
