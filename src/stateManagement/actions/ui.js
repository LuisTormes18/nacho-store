import { types } from "./../types/types";

export const openModalContainer = () => {
  return {
    type: types.openModal,
    payload: null,
  };
};
export const closeModalContainer = () => {
  return {
    type: types.closedModal,
    payload: null,
  };
};
