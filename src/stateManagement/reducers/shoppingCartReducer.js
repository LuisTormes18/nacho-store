import { getProductsInCartFromLocalStorage } from "./../../utils/utils";
import { types } from "./../types/types";

// "products": [
//     {
//       "id": 1,
//       "name": "Perfume",
//       "image": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
//       "price": 200,
//       "quantity": 1,
//     }
// ]
const initialState = {
  productsInCart: getProductsInCartFromLocalStorage(),
  modalCartIsOpen: false,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadProductsInCartFromLocalStorage:
      return {
        ...state,
        productsInCart: action.payload,
      };
    case types.addProductToCart:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case types.increseQuntityOfAProductInTheCart:
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => {
          if (product.id === action.payload) {
            product.quantity = product.quantity + 1;
          }
          return product;
        }),
      };
    case types.decreaseQuntityOfAProductInTheCart:
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => {
          if (product.id === action.payload) {
            product.quantity = product.quantity - 1;
          }
          return product;
        }),
      };
    case types.removeProductFromCart:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.id !== action.payload
        ),
      };
    case types.clearProductsFormCart:
      return {
        ...state,
        productsInCart: [],
      };
    case types.openModalCart:
      return {
        ...state,
        modalCartIsOpen: true,
      };
    case types.closedModalCart:
      return {
        ...state,
        modalCartIsOpen: false,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
