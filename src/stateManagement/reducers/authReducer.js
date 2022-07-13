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

    case types.login:
      return {
        ...state,
        user: { uid: action.payload.id, ...action.payload },
        modalLoginIsOpen: false,
        existUserInDb: null,
      };
    case types.logout:
      return { ...state, user: null };
    case types.loginError:
      return {
        ...state,
        modalLoginIsOpen: true,
      };
    default:
      return state;
  }
};
