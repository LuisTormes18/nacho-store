import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { formatPriceToUsd } from "../../utils/utils";

const CartItem = ({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  console.log(product);
  let price = `${product.min_price_e2}`.split("").slice(0, 2).join("");
  console.log(price);
  return (
    <div className="product-item d-flex align-items-center justify-content-between ps-1 pe-1">
      <div className="d-flex">
        <img
          className="img-fluid img me-3"
          src={product.vertical_picture_urls[0]}
          alt=""
        />

        <div>
          <h6 className="text-bold">{product.name}</h6>

          <RiSubtractLine
            className="icon"
            size="15"
            onClick={() => {
              handleDecrement(product.id);
            }}
          />
          <span className="text-bold">{product.quantity}</span>
          <RiAddLine
            className="icon"
            size="15"
            onClick={() => {
              handleIncrement(product.id);
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column ms-5 align-items-end">
        <p className="text-bold">
          {formatPriceToUsd(price * product.quantity)}
        </p>
        <RiDeleteBinLine
          size="25"
          onClick={() => {
            handleDelete(product.id);
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
