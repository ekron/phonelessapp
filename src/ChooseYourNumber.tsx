import React, { memo } from "react";
import styled from "@emotion/styled/macro";
import { usePhoneNumbrsQuery } from "./APIHooks/usePhoneNumbersQuery";

const ChooseYourNumberContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

/**
 * Screen where user can select phone number from a list 
 * of phone numbers to send SMSs from.
 */
export const ChooseYourNumber: React.FC = memo(() => {
  const { result } = usePhoneNumbrsQuery(null);
  return (
    <ChooseYourNumberContainer>
      {result?.data.phoneNumbers.map(phoneNumber => (
        <div key={phoneNumber.id}>{phoneNumber.number}</div>
      ))}
    </ChooseYourNumberContainer>
  );
});
