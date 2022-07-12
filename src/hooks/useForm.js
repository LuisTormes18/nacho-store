import { useState } from "react";

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);
  function handleInputchange({ target }) {
    setState({ ...state, [target.name]: target.value });
  }
  function reset(newState = initialState) {
    setState(newState);
  }
  return [state, handleInputchange, reset];
};

export default useForm;
