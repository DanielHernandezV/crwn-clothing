import { CategoriesContext } from "../../../context/categories.context";
import { useContext, Fragment } from "react";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
