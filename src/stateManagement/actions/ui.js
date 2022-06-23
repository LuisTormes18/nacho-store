import { types } from "./../types/types";

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
