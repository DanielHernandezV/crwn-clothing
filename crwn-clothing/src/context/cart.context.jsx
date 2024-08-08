import { createContext, useReducer } from "react";

//util function
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
  // (products atributes + amount)
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addCartItem: () => {},
  deleteOneProduct: () => {},
  deleteItemFromCart: () => {},
});

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};
export const CART_ACTION_TYPES = {
  UPDATE_CART: "UPDATE_CART",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

// reducer should not handle business logic
const cartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART: {
      return {
        ...state,
        ...payload,
      };
    }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      throw new Error(`Unhandle type of ${type} in cartReducer`);
  }
};

const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispach] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  /*  
  USING useState and useEffect
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);



  useEffect(() => {
    const quantity = cartItems.reduce(
      (acom, value) => acom + value.quantity,
      0
    );
    setCartCount(quantity);
  }, [cartItems]);

  useEffect(() => {
    const totalprice = cartItems.reduce(
      (acom, item) => acom + item.quantity * item.price,
      0
    );
    setCartTotal(totalprice);
  }, [cartItems]);

 */

  //Update fun helper
  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (acom, value) => acom + value.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (acom, item) => acom + item.quantity * item.price,
      0
    );
    dispach(
      createAction(CART_ACTION_TYPES.UPDATE_CART, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addCartItem = (productToAdd) => {
    const newCartItems = addCartItemHelper(cartItems, productToAdd);
    updateCartReducer(newCartItems);
  };
  const deleteOneProduct = (productToDelete) => {
    const newCartItems = deleteOneItemHelper(cartItems, productToDelete);
    updateCartReducer(newCartItems);
  };
  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteItemHelper(cartItems, productToDelete);
    updateCartReducer(newCartItems);
  };

  const setIsCartOpen = (isOpen) => {
    dispach(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addCartItem,
    deleteOneProduct,
    deleteItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
