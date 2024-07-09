import { useContext } from "react";
import {
  Information,
  CheckOutItemContainer,
  Quantity,
  Arrow,
  Value,
  Removebutton,
  ImageContainer,
} from "./checkout-item.style";

import { CartContext } from "../../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { deleteItemFromCart, addCartItem, deleteOneProduct } =
    useContext(CartContext);
  const { imageUrl, quantity, price, name } = cartItem;

  const clearItem = () => deleteItemFromCart(cartItem);
  const addItem = () => addCartItem(cartItem);
  const removeItem = () => deleteOneProduct(cartItem);
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Information>{name}</Information>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>

      <Information>{price}</Information>
      <Removebutton onClick={clearItem}>&#10005;</Removebutton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
