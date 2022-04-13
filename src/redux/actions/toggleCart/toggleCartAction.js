//Action type
import { TOGGLE_CART_ACTION } from "./toggleCartActionType";
import { TOGGLE_CURRENCY_MENU } from "./toggleCartActionType";

export const toggleCartAction = (close) => (dispatch) => {
  dispatch({
    type: TOGGLE_CART_ACTION,
    payload: close,
  });
};

export const toggleCurrencyMenu = (close) => (dispatch) => {
  dispatch({
    type: TOGGLE_CURRENCY_MENU,
    payload: close,
  });
};
