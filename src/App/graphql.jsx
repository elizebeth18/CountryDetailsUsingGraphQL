import { gql } from '@apollo/client';

export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      capital
    }
  }
`;

export const COUNTRY_DETAIL = gql`
query GetCountry($code:ID!){
  country(code:$code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
  }
}
`