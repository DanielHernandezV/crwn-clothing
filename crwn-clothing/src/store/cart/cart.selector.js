import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (selectCartItems) =>
    selectCartItems.reduce((acom, value) => acom + value.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (selectCartItems) =>
    selectCartItems.reduce((acom, item) => acom + item.quantity * item.price, 0)
);
