import { useSelector } from "react-redux";

export function getTotalCartValue(products) {
  const total = products
    .map((P) => P.price * P.quantity)
    .reduce((acum, price) => {
      acum = acum + price;
      return acum;
    });

  console.log(total);
  return total;
}
export function isProductInCart(id, productsInCart) {
  return productsInCart.map((p) => p.id).includes(id);
}
