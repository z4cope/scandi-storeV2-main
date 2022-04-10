import { FETCH_CATEGORIES } from "./fetchCategoriesActionType";
import { client } from "../../../server/apollo";
import { getCategoryProducts } from "../../../server/queries/getCategoryProducts";
import { getCategories } from "../../../server/queries/getCategories";

export const fetchCategoriesAction = () => async (dispatch, getState) => {
  const state = getState().categories;

  const { data: readOnlyData } = await client.query({
    query: getCategories,
  });

  const data = JSON.parse(JSON.stringify(readOnlyData));

  dispatch({
    type: FETCH_CATEGORIES,
    payload: { ...state, originalData: data.categories },
  });
};

export const fetchCategoryProducts =
  (categoryName) => async (dispatch, getState) => {
    const state = getState().categories;

    const { data: readOnlyData } = await client.query({
      query: getCategoryProducts,
      variables: {
        title: categoryName || "all",
      },
    });

    const data = JSON.parse(JSON.stringify(readOnlyData));

    const productsObject = {};
    for (let product of data.category.products) {
      productsObject[product.id] = product;
    }

    dispatch({
      type: "FETCH_PRODUCT",
      payload: { ...state, products: productsObject },
    });
  };
