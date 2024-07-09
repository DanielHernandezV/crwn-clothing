import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, id, title } = category;

  const navigate = useNavigate();
  const onNavegateHandler = (route) => navigate(route);
  return (
    <DirectoryItemContainer
      onClick={() => onNavegateHandler("shop/" + title)}
      key={id}
    >
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
