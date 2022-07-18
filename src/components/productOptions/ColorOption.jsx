import { useSelector, useDispatch } from "react-redux";
import { formatPriceToUsd } from "./../../utils/utils";

const ColorOption = ({
  value,
  colorOption,
  selectColor,
  setColor,
  setTotalPrice,
}) => {
  const { productActive: product } = useSelector((state) => state.ui);
  function changeColor(e) {
    setTotalPrice(
      (totalPrice) =>
        parseInt(`${product.min_price_e2}`.slice(0, 2)) +
        parseInt(`${colorOption?.price_e2}`.slice(0, 2))
    );
    setColor(e.target.value);
  }

  return (
    <div className="d-flex justify-content-between">
      <div>
        <input
          className="m-1"
          type="radio"
          id={`colorChoice${value}`}
          name={colorOption?.name}
          value={value}
          checked={selectColor == value ? true : false}
          onChange={changeColor}
        />
        <label>{colorOption?.name}</label>
      </div>
      <span>{formatPriceToUsd(`${colorOption?.price_e2}`.slice(0, 2))}</span>
    </div>
  );
};

export default ColorOption;
