import React from "react";
import styled from "@emotion/styled/macro";

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
 * Use `children` to set the contents of the menu.
 */
export const SideMenu: React.FC<{ show: boolean }> = ({ show, children }) => {
  // TODO: Handle close boolean and add a slideout animation.
  return <SideMenuContainer show={show}>{children}</SideMenuContainer>;
};
