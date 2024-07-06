import { useContext } from "react";
import "./checkout-item.style.scss";

import { CartContext } from "../../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { deleteItemFromCart, addCartItem, deleteOneProduct } =
    useContext(CartContext);
  const { imageUrl, quantity, price, name } = cartItem;

  const clearItem = () => deleteItemFromCart(cartItem);
  const addItem = () => addCartItem(cartItem);
  const removeItem = () => deleteOneProduct(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-countainer">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
