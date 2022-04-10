import { FILTER_PRODUCTS } from "../actions/pagesFilterAction/productsFilterActionType";

const initState = {
  arrayIndex: [0],
  catName: "All",
};

const filterPagesReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        arrayIndex: action.payload.arrIndex,
        catName: action.payload.categoryName,
      };
    default:
      return state;
  }
};

export default filterPagesReducer;
