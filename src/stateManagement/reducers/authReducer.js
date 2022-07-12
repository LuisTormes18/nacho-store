import { getUserFromLocalStorage } from "./../../utils/utils";
import { types } from "./../types/types";
const initialSate = {
  user: getUserFromLocalStorage(),
  modalLoginIsOpen: false,
  existUserInDb: null,
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
    case types.loginError:
      return {
        ...state,
        modalLoginIsOpen: true,
        existUserInDb: undefined,
      };

    case types.initLogin:
      return {
        ...state,
        user: null,
        modalLoginIsOpen: true,
        existUserInDb: true,
      };
    case types.finishLogin:
      return {
        ...state,
        user: { uid: action.payload.uid, name: action.payload.name },
        modalLoginIsOpen: false,
        existUserInDb: null,
      };
    case types.logout:
      return { ...state, user: null };

    default:
      return state;
  }
};
