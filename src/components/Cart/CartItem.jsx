import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from "react-icons/ri";

const CartItem = ({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div className="product-item d-flex align-items-center">
      <img className="img me-3" src={product.url} alt="" />

      <div>
        <h6>Gorra negra pequeña</h6>

        <RiSubtractLine
          className="icon"
          size="15"
          onClick={() => {
            handleDecrement(product.id);
          }}
        />
        <span>
          <b>{product.quantity}$</b>
        </span>
        <RiAddLine
          className="icon"
          size="15"
          onClick={() => {
            handleIncrement(product.id);
          }}
        />
      </div>
      <div className="push-right d-flex flex-column ms-5 align-items-end">
        <p>{product.price * product.quantity}$</p>
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
