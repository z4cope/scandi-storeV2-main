//Action type
import { SINGLE_PRODUCT_CLICK } from "./singleProductActionType";
import { getSingleProduct } from "../../../server/queries/getSingleProduct";
import { client } from "../../../server/apollo";

export const singleProductAction = (id) => async (dispatch) => {
  const {
    data: { product },
  } = await client.query({
    query: getSingleProduct,
    variables: {
      id,
    },
  });
  dispatch({
    type: SINGLE_PRODUCT_CLICK,
    payload: product,
  });
};

export const clearProduct = () => (dispatch) => {
  dispatch({
    type: "CLEAR",
  });
};
