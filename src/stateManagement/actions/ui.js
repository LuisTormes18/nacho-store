import { types } from "./../types/types";

export const closedCinta = () => {
  return {
    type: types.hiddenCinta,
    payload: null,
  };
};
export const openCinta = () => {
  return {
    type: types.showCinta,
    payload: null,
  };
};
export const openModalOptions = (product) => {
  return {
    type: types.openModalOptions,
    payload: product,
  };
};
export const closeModalOptions = () => {
  return {
    type: types.closedModalOptions,
    payload: null,
  };
};
