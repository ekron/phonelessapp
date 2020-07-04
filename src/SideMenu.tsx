import React, { useRef } from "react";
import styled from "@emotion/styled/macro";
import { useOnClickOutside } from "./useOnClickOutside";

const SideMenuContainer = styled.div<{ show: boolean }>`
  position: absolute;
  height: 100vh;
  width: 40vw;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /** Show and hide animation: */
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.2s ease-in-out;
`;

/**
 * When `show` is `true` this shows a menu taking up the left-hand 40% of the screen.
 * 
 * When the user clicks off the menu then `onClickOutside` is called.
 *
 * Use `children` to set the contents of the menu.
 */
export const SideMenu: React.FC<{
  show: boolean;
  onClickOutside: () => void;
}> = ({ show, onClickOutside, children }) => {
  // A reference to the node *containing* the sidemenu container
  const elementContainingSideMenu = useRef(null);

  // Custom hook to handle clicking outside the elementContainingSideMenu.
  // Up to the caller to handle onClickOutside and set the show variable.
  // But note we only call onClickOutside when the `show` is true.
  useOnClickOutside({
    elementToClickOutsideOf: elementContainingSideMenu,
    onClickedOutsideElement: () => show && onClickOutside(),
  });

  // All parent elements of the sidemenu need to be `overflow: hidden`
  // so a child element (some content in the sidemenu) can be `overflow: scroll`
  // and things will work as expected -- the child element will happily scroll
  // and there'll be no weird stray scroll bars on parent elements.
  return (
    <div style={{ overflow: "hidden" }} ref={elementContainingSideMenu}>
      <SideMenuContainer show={show}>{children}</SideMenuContainer>
    </div>
  );
};
