import { useSelector } from "react-redux";

export function calculateTotalCartValue(products) {
  const total = products
    .map((P) => `${P.min_price_e2}`.split('').slice(0,2).join('') * P.quantity )
    .reduce((acum, price) => {
      acum = acum + price;
      return acum;
    });

  return formatPriceToUsd(total);
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
  try {
    const currentData =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
    console.log(currentData);

    return currentData;
  } catch {
    return [];
  }
};
export const updateLocalStorage = (productsInCart) => {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
};

export const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user")) || null;

    return user;
  } catch {
    return null;
  }
};
export const setUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const formatPriceToUsd = (price) => {
  const dollarUsd = Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  });

  return dollarUsd.format(price);
};
