import { types } from "./../types/types";

export const addProdutToCart = (product) => {
  return {
    type: types.addProductToCart,
    payload: product,
  };
};
export const incrementQuntityOfAProduct = (id) => {
  return {
    type: types.increseQuntityOfAProductInTheCart,
    payload: id,
  };
};
export const decrementQuntityOfAProduct = (id) => {
  return {
    type: types.decreaseQuntityOfAProductInTheCart,
    payload: id,
  };
};
export const removeProdutFromCart = (id) => {
  return {
    type: types.removeProductFromCart,
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: types.clearProductsFormCart,
    payload: null,
  };
};
export const openModalCart = () => {
  return {
    type: types.openModalCart,
    payload: null,
  };
};
export const closeModalCart = () => {
  return {
    type: types.closedModalCart,
    payload: null,
  };
};

// export const getProductsInCartFromLocalStorage = () => {
//   const productsInCart = JSON.parse(localStorage.getItem("productsInCart") ) || [];
//   return {
//     type: types.loadProductsInCartFromLocalStorage,
//     payload: productsInCart,
//   };
// };

