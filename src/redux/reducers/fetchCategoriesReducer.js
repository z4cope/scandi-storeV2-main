import { FETCH_CATEGORIES } from "../actions/fetchCategories/fetchCategoriesActionType";

const initState = {
  data: [],
  products: {},
};

const fetchCategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        data: action.payload.originalData,
      };
    case "FETCH_PRODUCT":
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
};

export default fetchCategoriesReducer;
