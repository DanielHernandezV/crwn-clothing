import { CategoryTittle, CategoryContainer } from "./category.style";
import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );

  return (
    <Fragment>
      <CategoryTittle>{category.toUpperCase()}</CategoryTittle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
