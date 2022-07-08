import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  const httpLink = new HttpLink({ uri: "https://graphql.datocms.com" });
  const authLink = new ApolloLink((operation, forward) => {
    if (typeof window === "undefined") return null;
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
      },
    }));
    return forward(operation);
  });
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
