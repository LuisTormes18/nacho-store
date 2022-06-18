import { types } from "./../types/types";

const initialState = {
  productsInCart: 0,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shoppingCartReducer;
