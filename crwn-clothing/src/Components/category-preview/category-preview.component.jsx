import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.style";
import ProductCard from "../product-card/product-card.component";
import Spinner from "../spiner/spiner.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";
const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`./${title}`}>{title.toUpperCase()}</Title>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((item) => (
              <ProductCard key={item.name} product={item} />
            ))}
        </Preview>
      )}
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
