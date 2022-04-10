import { FILTER_PRODUCTS } from "./productsFilterActionType";

export const productsFilterAction = (arrIndex, categoryName) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: { arrIndex, categoryName },
  });
};
