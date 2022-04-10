import { combineReducers } from "redux";
import fetchCategoriesReducer from "./fetchCategoriesReducer";
import CartReducer from "./CartReducer";
import ToggleReducer from "./ToggleReducer";
import singleProductReducer from "./singleProductReducer";
import currencyReducer from "./currencyReducer";
import filterPagesReducer from "./filterPagesReducer";

const rootReducer = combineReducers({
  categories: fetchCategoriesReducer,
  cart: CartReducer,
  toggle: ToggleReducer,
  singleProduct: singleProductReducer,
  currency: currencyReducer,
  filterPages: filterPagesReducer,
});

export default rootReducer;
