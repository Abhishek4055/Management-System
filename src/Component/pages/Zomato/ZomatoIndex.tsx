import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";

function ZomatoIndex() {
  return (
    <ZomatoContainer>
      <HeaderSection />
    </ZomatoContainer>
  );
}

const ZomatoContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export default ZomatoIndex;
