import {
  Information,
  CheckOutItemContainer,
  Quantity,
  Arrow,
  Value,
  Removebutton,
  ImageContainer,
} from "./checkout-item.style";
import {
  deleteItemFromCart,
  addCartItem,
  deleteOneProduct,
} from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
const CheckoutItem = ({ cartItem }) => {
  const dispach = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, quantity, price, name } = cartItem;
  const clearItem = () => dispach(deleteItemFromCart(cartItems, cartItem));
  const addItem = () => dispach(addCartItem(cartItems, cartItem));
  const removeItem = () => dispach(deleteOneProduct(cartItems, cartItem));
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
