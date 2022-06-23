import { types } from "./../types/types";
export const startLoginWhitEmailAndCode = (state) => {
  // logica el login
  return login({ ui: 1, name: "luis" });
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

export const login = (user) => {
  return {
    type: types.finishLogin,
    payload: user,
  };
};
