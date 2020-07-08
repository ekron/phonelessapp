import React, { useRef, useEffect, memo } from "react";
import styled from "@emotion/styled/macro";
import { Button } from "./Button";
import { useMessagesQuery } from "./APIHooks/useMessagesQuery";

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
export const MessageList: React.FC = memo(() => {
  const { result } = useMessagesQuery({toAndFromContactId: "contact-id-to-come-from-route"});
  // Handing scrolling to the bottom of a the list of messages.
  const endOfMessages = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (endOfMessages.current)
      endOfMessages.current.scrollIntoView();
  };
  useEffect(scrollToBottom, [result]); 

  return (
    <MessagesContainer>
      <Button>Load More</Button>
      {result?.data.messages.map(message => <li key={message.id}>{message.content}</li>)}
      <div ref={endOfMessages} />
    </MessagesContainer>
  );
});
