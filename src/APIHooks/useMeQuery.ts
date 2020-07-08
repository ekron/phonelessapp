import { useGraphQLQuery } from "../util/useGraphQLQuery";
import { createMockFetcher } from "./createMockFetcher";

// This will all be generated once API is available

type Me = {
  id: string;
  name: string;
  currentPhoneNumber: {
    id: string;
    number: string;
  };
};

type MeQueryResponse = {
  me: Me;
};

// Only necessary for mocking:

const mockMe = () => ({
  me: {
    id: `some-user-id`,
    name: `Emlyn O Regan`,
    currentPhoneNumber: {
      id: "1",
      number: "123456789",
    },
  },
});

const mockMeFetcher = createMockFetcher<MeQueryResponse, undefined>(
  "query me",
  mockMe
);

// This will also be generated based on API:

/**
 * This is just an example hook to grab data from the GraphQL API.
 */
export function useMeQuery(variables: undefined) {
  // TODO: fill out mocked usePhoneNumbrsQuery with url, operation text and token.
  const url = "/api";
  const operationText = "query phoneNumbers { ...";
  const token = "some auth token"; // pulled from somewhere (local storage?)
  const result = useGraphQLQuery<MeQueryResponse, undefined>({
    url,
    operationText,
    token,
    variables,
    fetcher: mockMeFetcher, // delete this and use default once API ready
  });
  return {
    result: result.data,
    error: result.error,
  };
}
