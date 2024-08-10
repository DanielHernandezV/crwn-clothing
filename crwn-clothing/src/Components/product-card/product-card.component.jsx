import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { addCartItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ProductCard = ({ product }) => {
  const dispach = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const onClickhandler = () => {
    dispach(addCartItem(cartItems, product));
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
