//Action types
import { ADD_TO_CART } from "../actions/cartActions/addToCartActionType";
import { INCREMENT_PRODUCT } from "../actions/productQuantity/productQuantityActionType";
import { DECREMENT_PRODUCT } from "../actions/productQuantity/productQuantityActionType";

const initState = {
  data: [],
};

const CartReducer = (state = initState, action) => {
  if (
    !(
      action.type === ADD_TO_CART ||
      action.type === INCREMENT_PRODUCT ||
      action.type === DECREMENT_PRODUCT
    )
  )
    return state;

  const product = action.payload;
  const cartId = createProductAttribIdentifier(product);
  const productExist = state.data[cartId];

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: {
          ...state.data,
          [cartId]: {
            ...product,
            cartId,
            qty: productExist ? productExist.qty + 1 : 1,
          },
        },
      };
    case INCREMENT_PRODUCT:
      return {
        ...state,
        data: {
          ...state.data,
          [cartId]: {
            ...product,
            cartId,
            qty: productExist.qty + 1,
          },
        },
      };

    case DECREMENT_PRODUCT:
      if (productExist.qty - 1 === 0) {
        const newState = {
          ...state,
        };
        delete newState.data[cartId];
        return newState;
      }

      return {
        ...state,
        data: {
          ...state.data,
          [cartId]: {
            ...product,
            cartId,
            qty: productExist.qty - 1,
          },
        },
      };
    default:
      return state;
  }
};

const createProductAttribIdentifier = (product) => {
  let cartId = product.id;

  // for (let i = 0; i < product.attributes.length; i++) {
  //   const attrib = product.attributes[i];
  //   cartId += `-${attrib.selectedVariant.id}`;
  // }

  for (let attrib of product.attributes) {
    cartId += `-${attrib.selectedVariant.id}`;
  }
  return cartId;
};

export default CartReducer;
