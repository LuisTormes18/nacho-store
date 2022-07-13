import useCart from "./../../../hooks/useCart";
import { CartItem, TotalCartValue } from "../../../components";

const SummaryCart = () => {
  const { productsInCart, handleIncrement, handleDecrement, handleDelete } =
    useCart();
  return (
    <div className="container_radius">
      <h3 className="linea-bottom-gray p-2">Resumen</h3>
      <div className="p-2">
        {productsInCart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
        <TotalCartValue text="subtotal" />
        <hr />
        <TotalCartValue size="20px" />
      </div>
    </div>
  );
};

export default SummaryCart;
