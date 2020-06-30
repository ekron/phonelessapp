import React from "react";
import styled from "@emotion/styled/macro";
import { Button } from "./Button";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-y: scroll;
`;

/**
 * Settings screen -- just a Twilio API key and a test button.
 */
export const Settings: React.FC = () => {
  return (
    <SettingsContainer>
      API Key: <input/> <Button>Test</Button>
    </SettingsContainer>
  )
};
