import React, { useState, Suspense } from "react";

import { SideMenu } from "./SideMenu";
import { ContactList } from "./ContactList";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { AppContainer } from "./AppContainer";
import { AppHeaderContainer } from "./AppHeaderContainer";
import { MessagingSectionContainer } from "./MessagingSectionContainer";
import { MessageInputSectionContainer } from "./MessagInputSectionContainer";
import { AppHeaderItem } from "./AppHeaderItem";
import { Button } from "./Button";
import { ChooseYourNumber } from "./ChooseYourNumber";
import { Settings } from "./Settings";
import { Modal } from "./Modal";
import { ErrorBoundary } from "./ErrorBoundary";
import { Loading } from "./Loading";
import { Me } from "./Me";

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
      <SideMenu show={showSideMenu} onClickOutside={toggleContactsSideMenu}>
        <h1>
          Contacts <Button onClick={toggleContactsSideMenu}>Close</Button>
        </h1>
        <Button>+ add</Button>
        <ErrorBoundary message={"Cannot load contacts."}>
          <Suspense fallback={<Loading message="Loading contacts ..." />}>
            {showSideMenu && <ContactList />}
          </Suspense>
        </ErrorBoundary>
      </SideMenu>

      <Modal show={showChooseYourNumberModal}>
        <h1>
          Choose Your Number{" "}
          <Button onClick={toggleChooseYourPhoneNumberModal}>Cancel</Button>
        </h1>
        <Button>+ add</Button>
        <ErrorBoundary message={"Cannot load phone numbers."}>
          <Suspense fallback={<Loading message="Loading phone numbers ..." />}>
            {showChooseYourNumberModal && <ChooseYourNumber />}
          </Suspense>
        </ErrorBoundary>
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
          <ErrorBoundary message="Cannot load user info">
            <Suspense fallback={<Loading message="Loading user info ..." />}>
              <Me />
            </Suspense>
          </ErrorBoundary>
        </AppHeaderItem>
        <AppHeaderItem onClick={toggleSettingsModal}>Settings</AppHeaderItem>
        <AppHeaderItem onClick={toggleLogoutModal}>Logout</AppHeaderItem>
      </AppHeaderContainer>
      <MessagingSectionContainer>
        <ErrorBoundary message={"Cannot load messages."}>
          <Suspense fallback={<Loading centre message="Loading messages ..." />}>
            <MessageList />
          </Suspense>
          <MessageInputSectionContainer>
            <MessageInput />
            <Button>Send</Button>
          </MessageInputSectionContainer>
        </ErrorBoundary>
      </MessagingSectionContainer>
    </AppContainer>
  );
}

export default App;
