import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, id, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
