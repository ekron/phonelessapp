import React, { memo } from "react";
import styled from "@emotion/styled/macro";
import { useContactsQuery } from "./APIHooks/useContactsQuery";

const ContactListContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

/**
 * A list of contacts -- probably names and phone numbers.
 * Maybe avatars?
 */
export const ContactList: React.FC = memo(() => {
  const { result } = useContactsQuery({ search: "" });
  return (
    <ContactListContainer>
      {result?.data.contacts.map((contact) => (
        <div key={contact.id}>{contact.name}</div>
      ))}
    </ContactListContainer>
  );
});
