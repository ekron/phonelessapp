import { useGraphQLQuery } from "../util/useGraphQLQuery";
import { createMockFetcher } from "./createMockFetcher";

// This will all be generated once API is available

type Phone = {
  id: string;
  number: string;
};

type PhoneNumbersGraphQLResponse = {
  phoneNumbers: Phone[]
}

// Only necessary for mocking:

const mockPhoneNumbers = () => ({
  phoneNumbers: Array.from(Array(10), (_, i) => ({
    id: `${i}`,
    number: `1234567-${i} (Number from Twilio)`,
  })),
});

const mockContactsFetcher = createMockFetcher<
PhoneNumbersGraphQLResponse,
  null
>("query phoneNumbers", mockPhoneNumbers);

// This will also be generated based on API:

/**
 * This is just an example hook to grab data from the GraphQL API.
 */
export function usePhoneNumbrsQuery(variables: null) {
  // TODO: fill out mocked usePhoneNumbrsQuery with url, operation text and token.
  const url = "/api";
  const operationText = "query phoneNumbers { ...";
  const token = "some auth token"; // pulled from somewhere (local storage?)
  const result = useGraphQLQuery<PhoneNumbersGraphQLResponse, null>({
    url,
    operationText,
    token,
    variables,
    fetcher: mockContactsFetcher, // delete this and use default once API ready
  });
  return {
    result: result.data,
    error: result.error
  }
}
