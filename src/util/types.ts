export interface OperationConfig {
  url: string;
  token: string;
  operationText: string;
}

export interface OperationVariables<V> {
  variables?: V;
}

export interface GraphQLOperationResponse<D, E = { message: string }> {
  errors?: E[] | null;
  data: D;
}

export type IFetcher<D, V> = {
  (args: OperationVariables<V> & OperationConfig): Promise<
    GraphQLOperationResponse<D>
  >;
};
