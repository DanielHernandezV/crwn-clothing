import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../store/categories/categories.action";

import { fechCategoriesAsync } from "../../../store/categories/categories.action";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
