import { types } from "./../types/types";

const initialState = {
  isVisibilityCinta: null,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showCinta:
      return {
        ...state,
        isVisibilityCinta: true,
      };
    case types.hiddenCinta:
      return {
        ...state,
        isVisibilityCinta: false,
      };
    default:
      return initialState;
  }
};
