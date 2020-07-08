import { GraphQLOperationResponse, IFetcher } from "../util/types";

/**
 * Used to mock out the mock fetchers to use with SWR.
 */
export const createMockFetcher = <D, V>(
  opText: string,
  mockDataFn: (args?: V) => D
) => {
  const fetcher: IFetcher<D, V> = async ({ variables }) => {
    console.log("Query", opText)
    const operationResult: GraphQLOperationResponse<D> = {
      data: mockDataFn(variables),
      errors: null,
    };
    return new Promise(res => setTimeout(() => res(operationResult), 3000));
  };

  return fetcher;
};
