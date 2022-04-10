//Action type
import { SINGLE_PRODUCT_CLICK } from "../actions/singleProduct/singleProductActionType";

const initState = {
  data: {
    gallery: [],
    attributes: [],
    prices: [],
  },
};

const singleProductReducer = (state = initState, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_CLICK:
      return {
        ...state,
        data: action.payload,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        data: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default singleProductReducer;
