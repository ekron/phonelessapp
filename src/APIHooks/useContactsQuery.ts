import { useGraphQLQuery } from "../util/useGraphQLQuery";
import { createMockFetcher } from "./createMockFetcher";

// This will all be generated once API is available

type Variables = {
  search: string;
};

type Contact = {
  id: string;
  name: string;
};

type ContactsGraphQLResponse = {
  contacts: Contact[]
}

// Only necessary for mocking:

const mockContacts = () => ({
  contacts: Array.from(Array(100), (_, i) => ({
    id: `${i}`,
    name: `Contact ${i}`,
  })),
});

const mockContactsFetcher = createMockFetcher<
ContactsGraphQLResponse,
  Variables
>("query contacts", mockContacts);

// This will also be generated based on API:

/**
 * This is just an example hook to grab data from the GraphQL API.
 */
export function useContactsQuery(variables: Variables) {
  // TODO: fill out mocked useContactsQuery with url, operation text and token.
  const url = "/api";
  const operationText = `query contacts(search: "${variables.search}") { ...`;
  const token = "some auth token"; // pulled from somewhere (local storage?)
  const result = useGraphQLQuery<ContactsGraphQLResponse, Variables>({
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
