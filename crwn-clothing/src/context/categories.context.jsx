/* import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      setCategories(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;
 */
