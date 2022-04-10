import { GET_CURRENCIES } from "./currencyActionType";
import { GET_CURRENT_CURRENCIES } from "./currencyActionType";
import { client } from "../../../server/apollo";
import { getCurrencies } from "../../../server/queries/getCurrencies";

export const currencyAction = () => async (dispatch) => {
  const { data } = await client.query({ query: getCurrencies });

  dispatch({
    type: GET_CURRENCIES,
    payload: data,
  });
};

export const activeCurrency = (currentCurrency) => async (dispatch) => {
  dispatch({
    type: GET_CURRENT_CURRENCIES,
    payload: currentCurrency,
  });
};
