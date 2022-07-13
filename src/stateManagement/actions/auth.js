import { setUserLocalStorage } from "./../../utils/utils";
import { types } from "./../types/types";

export const openModalLogin = () => {
  return { type: types.openModalLogin };
};

export const closeModalLogin = () => {
  return { type: types.closedModalLogin };
};

export const login = (user) => {
  setUserLocalStorage(user);
  return { type: types.login, payload: user };
};

export const logout = () => {
  setUserLocalStorage(null);
  return { type: types.logout };
};
export const loginError = () => {
  return { type: types.loginError };
};
