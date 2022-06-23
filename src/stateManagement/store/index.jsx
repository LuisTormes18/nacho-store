import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shoppingCartReducer from "./../reducers/shoppingCartReducer";
import { authReducer } from "./../reducers/authReducer";
// import { uiReducer } from "./../reducers/uiReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
  // ui: uiReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
