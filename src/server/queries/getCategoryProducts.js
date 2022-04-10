import { gql } from "@apollo/client";

export const getCategoryProducts = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
