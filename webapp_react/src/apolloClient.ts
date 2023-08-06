import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BASE_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});
