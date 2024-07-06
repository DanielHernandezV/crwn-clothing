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
const deleteOneItemHelper = (cartItems, productToDelete) => {
  const theItem = cartItems.find((item) => item.id == productToDelete.id);

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

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addCartItem = (productToAdd) => {
    const theproduct = addCartItemHelper(cartItems, productToAdd);
    setCartItems(theproduct);
  };
  const deleteOneProduct = (productToDelete) => {
    setCartItems(deleteOneItemHelper(cartItems, productToDelete));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteItemHelper(cartItems, productToDelete));
  };

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

  useEffect(() => {
    const quantity = cartItems.reduce(
      (acom, value) => acom + value.quantity,
      0
    );
    setCartCount(quantity);
  }, [cartItems]);

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
