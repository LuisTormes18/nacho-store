import { useState } from "react";

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);
  function hanleInputchange({ target }) {
    setState({ ...state, [target.name]: target.value });
  }
  function reset(newState = initialState) {
    setState(newState);
  }
  return [state, hanleInputchange, reset];
};

export default useForm;
