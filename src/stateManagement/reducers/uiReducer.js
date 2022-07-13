import { types } from "./../types/types";

const initialState = {
  isVisibilityCinta: false,
  modalOptionsIsOpen: false,
  productActive: {},
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showCinta:
      return {
        ...state,
        isVisibilityCinta: true,
      };
    case types.hiddenCinta:
      return {
        ...state,
        isVisibilityCinta: false,
      };
    case types.openModalOptions:
      return {
        ...state,
        productActive: action.payload,
        modalOptionsIsOpen: true,
      };

    case types.closedModalOptions:
      return {
        ...state,
        modalOptionsIsOpen: false,
      };
    default:
      return initialState;
  }
};
