//Action types
import { INCREMENT_PRODUCT } from "./productQuantityActionType";
import { DECREMENT_PRODUCT } from "./productQuantityActionType";

export const productQuantityIncrementAction = (product) => (dispatch) => {
  dispatch({
    type: INCREMENT_PRODUCT,
    payload: product,
  });
};

export const productQuatityDecrementAction = (product) => (dispatch) => {
  dispatch({
    type: DECREMENT_PRODUCT,
    payload: product,
  });
};
