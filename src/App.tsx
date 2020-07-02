import React, { useState, useRef } from "react";

import { SideMenu } from "./SideMenu";
import { ContactList } from "./ContactList";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { useOnClickOutside } from "./useOnClickOutside";
import { AppContainer } from "./AppContainer";
import { AppHeaderContainer } from "./AppHeaderContainer";
import { MessagingSectionContainer } from "./MessagingSectionContainer";
import { MessageInputSectionContainer } from "./MessagInputSectionContainer";
import { AppHeaderItem } from "./AppHeaderItem";
import { Button } from "./Button";
import { ChooseYourNumber } from "./ChooseYourNumber";
import { Settings } from "./Settings";
import { Modal } from "./Modal";

/**
 * Entry point for app.
 */
function App() {

  // Hooks:
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showChooseYourNumberModal, setShowChooseYourNumberModal] = useState(
    false
  );
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const elementContainingSideMenu = useRef(null);

  // Custom hook to handling clicking outside the side menu to close it:
  useOnClickOutside({
    elementToClickOutsideOf: elementContainingSideMenu,
    onClickedOutsideElement: () => setShowSideMenu(false),
  });

  // Menu item onClick handlers:
  
  const toggleContactsSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const toggleChooseYourPhoneNumberModal = () => {
    setShowChooseYourNumberModal(!showChooseYourNumberModal);
  };

  const toggleSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const toggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
  };

  return (
    <AppContainer>
      {/* 
        Sidemenu needs to be inside a div so we can use useOnClickOutside with it. 
        Note that overflow on div is `hidden` too. Overflow is hidden in `AppContainer` and all its
        parents aswell. Why? We need this hierarchy of "hidden" so we don't get unwanted 
        scrollbars/overflow on parent elements. This may not work in iOS, in which case we'll need
        body scroll lock of similar.
      */
      }
      <div style={{ overflow: "hidden" }} ref={elementContainingSideMenu}>
        <SideMenu show={showSideMenu}>
          <h1>
            Contacts <Button onClick={toggleContactsSideMenu}>Close</Button>
          </h1>
          <Button>+ add</Button>
          <ContactList />
        </SideMenu>
      </div>
      <Modal show={showChooseYourNumberModal}>
        <h1>
          Choose Your Number{" "}
          <Button onClick={toggleChooseYourPhoneNumberModal}>Cancel</Button>
        </h1>
        <Button>+ add</Button>
        <ChooseYourNumber />
      </Modal>
      <Modal show={showSettingsModal}>
        <h1>
          Settings <Button onClick={toggleSettingsModal}>Cancel</Button>
        </h1>
        <Settings />
      </Modal>
      <Modal show={showLogoutModal}>
        <h1>Logout</h1>
        <div>
          Are you sure? <Button>Yes</Button>
          <Button onClick={toggleLogoutModal}>Cancel</Button>
        </div>
      </Modal>
      <AppHeaderContainer>
        <AppHeaderItem onClick={toggleContactsSideMenu}>Contacts</AppHeaderItem>
        <AppHeaderItem onClick={toggleChooseYourPhoneNumberModal}>
          Phone: 1234566789
        </AppHeaderItem>
        <AppHeaderItem onClick={toggleSettingsModal}>Settings</AppHeaderItem>
        <AppHeaderItem onClick={toggleLogoutModal}>Logout</AppHeaderItem>
      </AppHeaderContainer>
      <MessagingSectionContainer>
        <MessageList />
        <MessageInputSectionContainer>
          <MessageInput />
          <Button>Send</Button>
        </MessageInputSectionContainer>
      </MessagingSectionContainer>
    </AppContainer>
  );
}

export default App;
