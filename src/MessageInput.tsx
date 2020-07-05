import React from "react";
import styled from "@emotion/styled/macro";


const Input = styled.textarea`
  border-radius: .5rem;
  width: 100%;
  margin-left: .5rem;
`;

/**
 * Message Input might need extra code down the line, so
 * putting inside a component.
 */
export const MessageInput: React.FC = () => {
  return <Input placeholder="Write a message ..." />;
};
