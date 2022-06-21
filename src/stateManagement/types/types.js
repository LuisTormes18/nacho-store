export const types = {
  // Auth
  initLogin: "[Auth] Init Login",
  finishLogin: "[Auth] User Authenticated",
  logout: "[Auth] Logout",

  // Cart
  addProductToCart: "[Cart] Add new product",
  increseQuntityOfAProductInTheCart: "[Cart] increment quantity of a product",
  decreaseQuntityOfAProductInTheCart: "[Cart] decrement quantity of a product",
  removeProductFromCart: "[Cart] remove a product",
  clearProductsFormCart:"[Cart] Clear all products from cart",

  // UI
  openModalLogin: "[UI] Open Modal Login",
  closedModalLogin: "[UI] closed Modal Login",
  openModalCart: "[UI] Open Modal Cart",
  closedModalCart: "[UI] closed Modal Cart",
};
