import React from "react";
import styled from "@emotion/styled/macro";

const ContactListContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

/**
 * A list of contacts -- probably names and phone numbers. 
 * Maybe avatars?
 */
export const ContactList: React.FC = () => {
  const mockContacts = Array.from(Array(30), (_, i) => <li>Contact {i}</li>);
  return <ContactListContainer>{mockContacts}</ContactListContainer>;
};
