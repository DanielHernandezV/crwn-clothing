import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
//Helpers functions
const addCartItemHelper = (cartItems, productToAdd) => {
  const theItem = cartItems.find((item) => item.id === productToAdd.id);
  if (theItem)
    //updating cart
    return cartItems.map((item) =>
      theItem.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...cartItems, { quantity: 1, ...productToAdd }];
};
const deleteOneItemHelper = (cartItems, productToDelete) => {
  const theItem = cartItems.find((item) => item.id === productToDelete.id);

  if (theItem.quantity > 1)
    return cartItems.map((item) =>
      item.id !== theItem.id ? item : { ...item, quantity: item.quantity - 1 }
    );

  return cartItems.filter((item) => item.id !== productToDelete.id);
};

const deleteItemHelper = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
};

export const addCartItem = (cartItems, productToAdd) => {
  const newCartItems = addCartItemHelper(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.UPDATE_CART, newCartItems);
};
export const deleteOneProduct = (cartItems, productToDelete) => {
  const newCartItems = deleteOneItemHelper(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.UPDATE_CART, newCartItems);
};
export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteItemHelper(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.UPDATE_CART, newCartItems);
};
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
