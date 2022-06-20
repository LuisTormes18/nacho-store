import { types } from "./../types/types";

export const openModalLogin = () => {
  return {
    type: types.openModalLogin,
    payload: null,
  };
};
export const closeModalLogin = () => {
  return {
    type: types.closedModalLogin,
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
