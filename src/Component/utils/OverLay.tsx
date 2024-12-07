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
            <h3>{titel}</h3>
            <CloseIconButton onClick={onClose}>❌</CloseIconButton>
          </OverLayHeader>
          {children}
        </OverlayContent>
      </OverlayContainer>
    </>
  );
};

export default React.memo(OverlayPage);

interface OverlayContainerProps {
  isVisible: boolean;
}

const OverLayHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  z-index: 1100;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  padding: 0 35px;
  height: 57px;
  background-color: black;

  @media (max-width: 480px) {
    font-size: small;
    padding: 0px 20px;
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
  @media (max-width: 480px) {
    width: 80%;
  }
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
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  .body {
    position: relative;
    top: 60px;
  }
  .footer {
    position: fixed;
    z-index: 1100;
    bottom: 20px;
    width: 45%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    @media (max-width: 480px) {
      width: 70%;
    }
  }
  @media (max-width: 480px) {
    padding: 15px;
    text-align: left;
    font-size: xx-small;
  }
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
    transform: rotate(360deg) scale(1.3);
  }
  @media (max-width: 480px) {
    font-size: large;
  }
`;
