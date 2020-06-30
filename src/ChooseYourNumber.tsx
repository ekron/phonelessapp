import React from "react";
import styled from "@emotion/styled/macro";

const ChooseYourNumberContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

/**
 * Screen where user can select phone number from a list 
 * of phone numbers to send SMSs from.
 */
export const ChooseYourNumber: React.FC = () => {
  const mockNumbers = Array.from(Array(30), (_, i) => <li>Number from Twilio {i}</li>);
  return <ChooseYourNumberContainer>{mockNumbers}</ChooseYourNumberContainer>;
};
