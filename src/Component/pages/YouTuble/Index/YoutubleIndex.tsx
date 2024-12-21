import React from "react";
import styled from "styled-components";
import YouTubeHeader from "./YouTubeHeader";
import YouTubeContent from "../pages/YouTubeContent";

function YoutubleIndex() {
  return (
    <Main className="main">
      <YouTubeHeader />
      <YouTubeContent />
    </Main>
  );
}

const Main = styled.div`
  /* border: 1px solid; */
  height: 100vh;
`;

export default YoutubleIndex;
