import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingPage: React.FC = ({
  message = "Loading",
}: {
  message?: string;
}) => (
  <>
    <Wraper className="loading_wraper">
      <span className="text">{message}</span>
      <AnimatedDots>
        <Dot>.</Dot>
        <Dot delay="0.2s">.</Dot>
        <Dot delay="0.4s">.</Dot>
        <Dot delay="0.8s">.</Dot>
        <Dot delay="0.16s">.</Dot>
        <Dot delay="0.32s">.</Dot>
      </AnimatedDots>
    </Wraper>
  </>
);

// Keyframe animation for dot color
const dotBlink = keyframes`
  0% { opacity: 0; }
  25% { opacity: 1; }
  50% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 0; }
`;

const AnimatedDots = styled.span`
  font-size: 2rem;
`;

const Wraper = styled.div`
  /* width: auto; */
  margin: auto;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Dot = styled.span<{ delay?: string }>`
  color: #05a532;
  animation: ${dotBlink} 1.5s infinite;
  animation-delay: ${({ delay }) => delay || "0s"};

  /* font-family: ; */
`;

export default LoadingPage;
