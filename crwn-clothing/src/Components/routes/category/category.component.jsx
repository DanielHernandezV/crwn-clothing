import { CategoryTittle, CategoryContainer } from "./category.style";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

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
