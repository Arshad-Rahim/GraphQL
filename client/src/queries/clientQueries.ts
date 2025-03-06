import {gql} from '@apollo/client'

export const GET_CLIENTS = gql`
  query getClient {
    clients {
      id
      name
      email
      phone
    }
  }
`;
