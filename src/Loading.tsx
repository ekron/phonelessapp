import React from "react";
import styled from "@emotion/styled/macro";

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading: React.FC<{ message: string }> = ({ message }) => {
  return <LoadingContainer>{message}</LoadingContainer>;
};
