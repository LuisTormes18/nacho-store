import { types } from "./../types/types";

const initialState = {
  modalIsOpen: false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.openModal:
      return {
        ...state,
        modalIsOpen: true,
      };
    case types.closedModal:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return initialState;
  }
};
