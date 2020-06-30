import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { Button } from "./Button";

const MessagesContainer = styled.ul`
  background-color: silver;
  z-index: 0;
  overflow-y: scroll;
  margin: 0px;
`;

/**
 * A list of messages. This automatically scrolls to the bottom
 * of the list and has a load more button at the top.
 */
export const MessageList: React.FC = () => {
  // Handing scrolling to the bottom of a the list of messages.
  const endOfMessages = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (endOfMessages.current)
      endOfMessages.current.scrollIntoView();
  };
  // When this is receiving messages, this useEffect 
  // should depend on messages prop.
  useEffect(scrollToBottom, []); 

  const mockMessages = Array.from(Array(40), (_, i) => <li>Message {39 - i}</li>);

  return (
    <MessagesContainer>
      <Button>Load More</Button>
      {mockMessages}
      <div ref={endOfMessages} />
    </MessagesContainer>
  );
};
