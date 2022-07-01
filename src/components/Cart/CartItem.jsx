import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { formatPriceToUsd } from "../../utils/utils";

const CartItem = ({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div className="product-item d-flex align-items-center justify-content-between ps-1 pe-1">
      <div className="d-flex">
        <img className="img me-3" src={product.url} alt="" />

        <div>
          <h6 className="text-bold">Gorra negra pequeña</h6>

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
          {formatPriceToUsd(product.price * product.quantity)}
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
