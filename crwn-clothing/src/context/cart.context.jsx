import { createContext, useEffect, useState } from "react";

const addCartItemHelper = (cartItems, productToAdd) => {
  const theItem = cartItems.find((item) => item.id == productToAdd.id);

  if (theItem)
    //updating cart
    return cartItems.map((item) =>
      theItem.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...cartItems, { quantity: 1, ...productToAdd }];
};

export const CartContext = createContext({
  // (products atributes + amount)
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (productToAdd) => {
    const theproduct = addCartItemHelper(cartItems, productToAdd);
    setCartItems(theproduct);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
