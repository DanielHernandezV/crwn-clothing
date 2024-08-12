import { CategoryTittle, CategoryContainer } from "./category.style";
import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMAP,
  selectCategoriesIsLoading,
} from "../../../store/categories/categories.selector";
import Spinner from "../../spiner/spiner.component";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMAP);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTittle>{category.toUpperCase()}</CategoryTittle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
