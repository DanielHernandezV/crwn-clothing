import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addCartItem } = useContext(CartContext);

  const onClickhandler = () => {
    addCartItem(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={onClickhandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
