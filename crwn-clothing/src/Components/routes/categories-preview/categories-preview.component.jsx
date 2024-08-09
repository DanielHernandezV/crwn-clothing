import { Fragment } from "react";
import CategoryPreview from "../../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/categories.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          products={categoriesMap[title]}
          title={title}
        />
      ))}
    </Fragment>
  );
};
export default CategoriesPreview;
