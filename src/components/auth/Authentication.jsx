import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const Authentication = () => {
  const { existUserInDb } = useSelector((state) => state.auth);

  if (existUserInDb) {
    return <div>Enter code</div>;
  }
  if (existUserInDb === undefined) {
    return <FormRegister />;
  }
  return <FormLogin />;
};

export default Authentication;
