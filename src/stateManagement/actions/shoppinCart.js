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
  
