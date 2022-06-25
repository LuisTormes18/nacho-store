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
export function getCurrentTime() {
  let date = new Date();
  console.log(date);
  return `${date.getHours()}`;
}
export const getProductsInCartFromLocalStorage = () => {
  try{
  const currentData = JSON.parse(localStorage.getItem("productsInCart")) || []
  console.log(currentData)
 
  return currentData;

}catch{

  return []


}
  
};
export const updateLocalStorage = (productsInCart) => {
   localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}