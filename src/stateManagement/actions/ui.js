import { types } from "./../types/types";

export const closedCinta = () => {
  return {
    type: types.hiddenCinta,
    payload: null,
  };
};
export const openCinta = () => {
  return {
    type: types.showCinta,
    payload: null,
  };
};
