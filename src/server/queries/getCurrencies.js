import { gql } from "@apollo/client";

export const getCurrencies = gql`
  query currency {
    currencies {
      label
      symbol
    }
  }
`;
