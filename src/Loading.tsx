import React from "react";
import styled from "@emotion/styled/macro";

const CentredLoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading: React.FC<{ message: string; centre?: boolean }> = ({
  message,
  centre,
}) => {
  return centre ? (
    <CentredLoadingContainer>{message}</CentredLoadingContainer>
  ) : (
    <LoadingContainer>{message}</LoadingContainer>
  );
};
