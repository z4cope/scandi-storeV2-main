import { ADD_TO_CART } from "./addToCartActionType";

export const addToCartAction = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};
