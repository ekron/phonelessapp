import React from "react";
import styled from "@emotion/styled/macro";

const ModalContainer = styled.div<{show: boolean}>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  /** Show and hide animation: */
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.2s ease-in-out;
`;

/**
 * Modal that slides in from the top. 
 * 
 * Pass in `show` boolean to show/hide it and `children` as content.
 */
export const Modal: React.FC<{ show: boolean }> = ({ show, children }) => {
  return <ModalContainer show={show}>{children}</ModalContainer>;
};
