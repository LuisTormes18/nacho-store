import { useState } from "react";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import EnterCode from "./EnterCode";

const Authentication = () => {
  const [existUser, setExistUser] = useState(null);

  if (existUser) {
    return <EnterCode setExistUser={setExistUser} />;
  }
  if (existUser === undefined) {
    return <FormRegister setExistUser={setExistUser} />;
  }
  return <FormLogin setExistUser={setExistUser} />;
};

export default Authentication;
