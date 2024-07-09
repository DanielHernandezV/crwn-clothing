import { CartItemContainer, Name, ItemDetails } from "./cart-item.style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, id, imageUrl, price } = cartItem;
  return (
    <CartItemContainer key={id}>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
