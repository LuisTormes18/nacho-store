import instanceAxios from "./axios";

export const sendEmail = async (formData) => {
  console.log(formData);
  const resp = await instanceAxios.post("auth/send-email", formData, {});
  const data = await resp.data;
  return data.existEmail;
};
export const sendCode = async (code) => {
  console.log("code", code);
  const resp = await instanceAxios.post("auth/send-code-login", code, {});
  const data = await resp.data;
  return data;
};
export const sendRegister = async (formData) => {
  const resp = await instanceAxios.post("auth/register", formData, {});
  const data = await resp.data;
  return data.ok;
};
