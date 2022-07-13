export const types = {
  // Auth
  login: "[Auth] User Authenticated",
  logout: "[Auth] User Logout",
  loginError: "[Auth] Error Login",
  openModalLogin: "[UI] Open Modal Login",
  closedModalLogin: "[UI] closed Modal Login",

  // Cart
  addProductToCart: "[Cart] Add new product",
  increseQuntityOfAProductInTheCart: "[Cart] increment quantity of a product",
  decreaseQuntityOfAProductInTheCart: "[Cart] decrement quantity of a product",
  removeProductFromCart: "[Cart] remove a product",
  clearProductsFormCart: "[Cart] Clear all products from cart",
  openModalCart: "[UI] Open modal from cart",
  closedModalCart: "[UI] closed modal from cart",
  // loadProductsInCartFromLocalStorage: "[Cart] Load products from localStorage",
  // updateProductsInCartInLocalStorage: "[Cart] updated localStorage",

  // UI
  showCinta: "[UI] Open Cinta",
  hiddenCinta: "[UI] closed Cinta",
  openModalOptions: "[UI] Open Modal Options",
  closedModalOptions: "[UI] closed Modal Options",
};
