import { getUserFromLocalStorage } from "./../../utils/utils";
import { types } from "./../types/types";
const initialSate = {
  user: getUserFromLocalStorage(),
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
      return { ...state, user: null };

    default:
      return state;
  }
};
