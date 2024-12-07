import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingPage: React.FC<{ message?: string }> = ({ message }) => (
  <LoadingContainer>
    {message && (
      <h2>
        {message}
        <AnimatedDots>
          <Dot>.</Dot>
          <Dot delay="0.2s">.</Dot>
          <Dot delay="0.4s">.</Dot>
        </AnimatedDots>
      </h2>
    )}
  </LoadingContainer>
);

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Keyframe animation for dot color
const dotBlink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const AnimatedDots = styled.span`
  font-size: 2rem;
`;

const Dot = styled.span<{ delay?: string }>`
  color: #67dfb7;
  animation: ${dotBlink} 1.5s infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  font-size: 2rem;
`;

export default LoadingPage;
