import { setUserLocalStorage } from "./../../utils/utils";
import { types } from "./../types/types";

import { setLogin } from "./../../services/auth";
export const startLoginWhitEmailAndCode = (state) => {
  console.log("login", state);

  return async (dispatch) => {
    const user = await setLogin(state);

    if (!!user) {
      dispatch(initLogin());
    }
    if (!user) {
      dispatch(loginError());
    }
  };
};

export const openModalLogin = () => {
  return {
    type: types.openModalLogin,
    payload: null,
  };
};
export const closeModalLogin = () => {
  return {
    type: types.closedModalLogin,
    payload: null,
  };
};
export const loginError = () => {
  return {
    type: types.loginError,
    payload: null,
  };
};
export const initLogin = (user) => {
  return {
    type: types.initLogin,
    payload: user,
  };
};
export const login = (user) => {
  setUserLocalStorage(user);
  return {
    type: types.finishLogin,
    payload: user,
  };
};

export const logout = () => {
  setUserLocalStorage(null);
  return {
    type: types.logout,
    payload: null,
  };
};
