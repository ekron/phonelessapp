import { useGraphQLQuery } from "../util/useGraphQLQuery";
import { createMockFetcher } from "./createMockFetcher";

// This will all be generated once API is available

type Message = {
  id: string;
  from: { id: string; name: string };
  content: string;
};

type MessagesGraphQLResponse = {
  messages: Message[];
};

type Variables = {
  toAndFromContactId: string;
};

// Only necessary for mocking:

const mockMessages = (args: { toAndFromContactId: string } | undefined) => ({
  messages: Array.from(Array(200), (_, i) => ({
    id: `${i}`,
    content: `message ${199 - i} to or from contact ${args?.toAndFromContactId}`,
    from: {
      id: `${i}`,
      name: `contact ${199 - i}`,
    },
  })),
});

const mockMessagesFetcher = createMockFetcher<
  MessagesGraphQLResponse,
  Variables
>("query messages", mockMessages);

// This will also be generated based on API:

/**
 * This is just an example hook to grab data from the GraphQL API.
 */
export function useMessagesQuery(variables: Variables) {
  // TODO: fill out mocked useMessagesQuery with url, operation text and token.
  const url = "/api";
  const operationText = `query messages(toAndFromContactId: "${variables.toAndFromContactId}") { ...`;
  const token = "some auth token"; // pulled from somewhere (local storage?)
  const result = useGraphQLQuery<MessagesGraphQLResponse, Variables>({
    url,
    operationText,
    token,
    variables,
    fetcher: mockMessagesFetcher, // delete this and use default once API ready
  });
  return {
    result: result.data,
    error: result.error,
  };
}
