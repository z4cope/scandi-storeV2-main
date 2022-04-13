import {
  TOGGLE_CART_ACTION,
  TOGGLE_CURRENCY_MENU,
} from "../actions/toggleCart/toggleCartActionType";

const initState = {
  toggleState: false,
  toggleCurrencyMenuState: false,
};

const ToggleReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CART_ACTION:
      return {
        ...state,
        toggleState: action.payload === "close" ? false : !state.toggleState,
      };
    case TOGGLE_CURRENCY_MENU:
      return {
        ...state,
        toggleCurrencyMenuState:
          action.payload === "close" ? false : !state.toggleCurrencyMenuState,
      };
    default:
      return state;
  }
};

export default ToggleReducer;
