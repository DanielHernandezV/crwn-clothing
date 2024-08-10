import { CartIconContainer, ShoppingSvg, ItemCount } from "./cart-icon.styles";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const CartIcon = () => {
  const dispach = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleHandler = () => {
    dispach(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShoppingSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
