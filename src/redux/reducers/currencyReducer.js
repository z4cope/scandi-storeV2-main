import {
  GET_CURRENCIES,
  GET_CURRENT_CURRENCIES,
} from "../actions/currencyAction/currencyActionType";

const initState = {
  currency: [],
  currentSymbol: "",
  currentLabel: "",
};

const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currency: action.payload,
        currentSymbol: action.payload.currencies[0].symbol,
        currentLabel: action.payload.currencies[0].label,
      };
    case GET_CURRENT_CURRENCIES:
      return {
        ...state,
        currentSymbol: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
