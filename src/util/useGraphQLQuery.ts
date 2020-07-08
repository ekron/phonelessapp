import { createCacheKey } from "./createCacheKey";
import useSWR from "swr";
import {
  OperationVariables,
  OperationConfig,
  GraphQLOperationResponse,
  IFetcher
} from "./types";

/**
 * Generic internal function to send POST requests to a GraphQL API
 * using the browser's built-in fetch function. 
 * 
 * Pass in types:
 * 
 * - `D` for the returned data type,
 * - `V` for the variables type.
 * 
 * Returns a promise
 * which resolves to the response.
 */
async function graphQLFetch<D, V>({
  url,
  token,
  operationText,
  variables,
}: OperationVariables<V> & OperationConfig) {
  const body = JSON.stringify({
    query: operationText, // note the "query" could a be a mutation OR a query string.
    variables,
  });

  // Fetch API options:
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body,
  };

  const response = await fetch(url, options);
  const json = (await response.json()) as GraphQLOperationResponse<D>;
  // FIXME: Unsafely Coerce the json response to the expected GraphQL response type.
  // If using GraphQL API that should ensure type safety.

  if (json.errors) {
    console.error(
      `GraphQL Errors in query`,
      operationText,
      variables,
      json.errors
    );
  }
  return json;
}

/**
 * Generic hook to query a GraphQL API.
 * 
 * Pass in types:
 * 
 * - `D` for the returned data type,
 * - `V` for the variables type.
 *
 * Use to create hooks for particular queries *manually*
 * or in generated code.
 *
 * This hook sends a request to the server. If a response is 
 * cached then it will return the cached data immediately.
 *
 * It will also refresh from the server if there's a
 * network connection and:
 *
 * - if this hook is on the screen for 20 mins,
 * - when this hook is "mounted";
 *   - e.g. when you navigate to a page in your app containing the hook;
 * - when a window containing the hook is re-focused;
 *   - e.g. when you switch to a different browser tab and then back to
 *     a browser tab containing the hook.
 *   - e.g. a laptops wakes from sleep.
 *   - e.g. a PWA starts up from the home screen.
 * - when the browser regains a network connection;
 *   - e.g. when the network drops out and recovers after a period.
 *
 * This gives you:
 *
 * - eventual consistency with the data on the server,
 * - no need to configure or update the cache.
 */
export function useGraphQLQuery<D, V>({
  url,
  token,
  operationText,
  variables,
  fetcher = graphQLFetch,
}: OperationVariables<V> & OperationConfig & { fetcher?: IFetcher<D, V> }) {
  const refreshIntervalInMins = 20;
  const refreshInterval = 1000 * 60 * refreshIntervalInMins;
  const suspense = true;
  const cacheKey = createCacheKey(operationText, variables);

  const result = useSWR(
    cacheKey,
    () => fetcher({ url, token, operationText, variables }),
    { suspense, refreshInterval, dedupingInterval: 3000}
  );

  return result;
}
