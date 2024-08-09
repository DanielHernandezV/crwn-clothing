import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
//note
// actions pass by default to every reducer, so if none of the cases mach, we need to return the same state
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
