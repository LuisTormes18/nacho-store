import { types } from "./../types/types";
const initialSate = {
  user: null,
  modalLoginIsOpen: false,
};
export const authReducer = (state = initialSate, action) => {
  switch (action.type) {
    case types.openModalLogin:
      return { ...state, modalLoginIsOpen: true };

    case types.closedModalLogin:
      return {
        ...state,
        modalLoginIsOpen: false,
      };
    case types.finishLogin:
      return {
        ...state,
        user: { uid: action.payload.uid, name: action.payload.name },
        modalLoginIsOpen: false,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
