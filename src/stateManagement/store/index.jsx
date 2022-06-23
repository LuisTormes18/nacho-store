import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shoppingCartReducer from "./../reducers/shoppingCartReducer";
import { uiReducer } from "./../reducers/uiReducer";
import { authReducer } from "./../reducers/authReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
  ui: uiReducer,
  auth: authReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
