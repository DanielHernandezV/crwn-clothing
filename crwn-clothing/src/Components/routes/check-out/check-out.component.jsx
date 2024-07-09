import { useContext } from "react";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./check-out.style";

import { CartContext } from "../../../context/cart.context";
import CheckoutItem from "../../checkout-item/checkout-item";
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>Total : ${cartTotal}</Total>
    </CheckOutContainer>
  );
};
export default CheckOut;
