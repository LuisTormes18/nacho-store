import { useSelector } from "react-redux";
const useProductsFromCart = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  return productsInCart;
};

export default useProductsFromCart;
