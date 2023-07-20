import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
export const { getClient } = registerApolloClient(() => {
  const { GRAPHQL_ENDPOINT, API_TOKEN } = process.env;
  return new NextSSRApolloClient({
    uri: GRAPHQL_ENDPOINT,
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: new NextSSRInMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
    },
  });
});
