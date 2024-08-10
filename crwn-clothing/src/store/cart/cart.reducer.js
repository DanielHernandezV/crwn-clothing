import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

// reducer should not handle business logic
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART: {
      return {
        ...state,
        cartItems: payload,
      };
    }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      return state;
  }
};
