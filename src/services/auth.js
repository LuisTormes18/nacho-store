// despues de regisrace se pide un codigo de verificacion
import instanceAxios from "./axios";

export const setLogin = async (formData) => {
  // const resp = await instanceAxios.post("login", formData );
  // const data = await resp.data;
  // return null
  return { ui: 1, name: "Funciona Rivera", email: "juancho_r@gmail.com" };
};
