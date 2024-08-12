import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
export const fechCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_START);

export const fechCategoriesSucces = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_SUCCESS, categories);

export const fechCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_ERROR, error);

//thunk
export const fechCategoriesAsync = () => async (dispatch) => {
  dispatch(fechCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fechCategoriesSucces(categoriesArray));
  } catch (error) {
    dispatch(fechCategoriesFailed(error));
  }
};
