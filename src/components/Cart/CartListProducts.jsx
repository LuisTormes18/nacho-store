import { useSelector } from "react-redux";
import useCart from "./../../hooks/useCart";
import CartItem from "./CartItem";

const CartListProducts = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const { handleIncrement, handleDecrement, handleDelete } = useCart();

  return (
    <div className="p-2 cart__body">
      {productsInCart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CartListProducts;
