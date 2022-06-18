import { createStore, combineReducers, compose } from "redux";
import shoppingCartReducer from "./../reducers/shoppingCartReducer";
import { uiReducer } from "./../reducers/uiReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
  ui: uiReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers());
