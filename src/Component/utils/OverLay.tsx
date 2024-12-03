import React, { useEffect } from "react";
import styled from "styled-components";
import { OverlayModule } from "../modal";

const OverlayPage: React.FC<OverlayModule> = (props) => {
  const { titel = "Header", isVisible, onClose, children } = props;

  useEffect(() => {
    if (isVisible) {
      // Disable scrolling on the body when overlay is visible
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body
      document.body.style.overflow = "";
    }

    // Cleanup when the component unmounts or `isVisible` changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && <Backdrop />}
      <OverlayContainer isVisible={isVisible}>
        <OverlayContent>
          <OverLayHeader>
            <span>{titel}</span>
            <CloseIconButton onClick={onClose}>❌</CloseIconButton>
          </OverLayHeader>
          {children}
        </OverlayContent>
      </OverlayContainer>
    </>
  );
};

export default OverlayPage;

interface OverlayContainerProps {
  isVisible: boolean;
}

const OverLayHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  span {
    font-size: 24px;
    color: white;
    font-weight: bold;
    background: none;
    border: none;
  }
`;

const OverlayContainer = styled.div<OverlayContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ isVisible }) =>
    isVisible ? "0" : "-100%"}; /* Off-screen when hidden */
  width: 50%;
  height: 100vh;
  color: #f0f8ff;
  background-color: #282c34;
  box-shadow: inset 0 0 10px #565f71;
  z-index: 1100;
  transition: right 0.8s ease-in-out;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: auto;
`;

const OverlayContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const CloseIconButton = styled.button`
  font-size: 15px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all;
  padding: auto;
  transition: 0.8s all;
  &:hover {
    transform: rotate(360deg) scale(1.5);
  }
`;
