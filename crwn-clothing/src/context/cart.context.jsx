import { createContext, useState } from "react";

export const CartContext = createContext({
  // (products atributes + amount)
  isCartOpen: false,
  setIsCartOpen: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
