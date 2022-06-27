import { useSelector } from "react-redux";
import { getTotalCartValue } from "./../../utils/utils";
const TotalCartValue = ({ text = "Total" }) => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  return (
    <div className="d-flex justify-content-between p-3 pb-0">
      <span className="text-bold">{text}</span>
      <span className="text-bold">{getTotalCartValue(productsInCart)}$</span>
    </div>
  );
};

export default TotalCartValue;
