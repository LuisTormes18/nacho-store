import { types } from "./../types/types";

const initialState = {
  modalLoginIsOpen: false,
  modalCartIsOpen: false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.openModalLogin:
      return {
        ...state,
        modalLoginIsOpen: true,
      };
    case types.closedModalLogin:
      return {
        ...state,
        modalLoginIsOpen: false,
      };
    case types.openModalCart:
      return {
        ...state,
        modalCartIsOpen: true,
      };
    case types.closedModalCart:
      return {
        ...state,
        modalCartIsOpen: false,
      };
    default:
      return initialState;
  }
};
