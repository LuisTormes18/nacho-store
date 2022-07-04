import { useState } from "react";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const Authentication = () => {
  const [exist, setExist] = useState(null);

  if (exist) {
    return <div>Enter code</div>;
  }
  if (exist === undefined) {
    return <FormRegister />;
  }
  return <FormLogin />;
};

export default Authentication;
