import React, { memo, ReactElement } from "react";

import styled from "styled-components";
interface CARD_MODULE {
  item?: unknown;
}
const Card = memo(({ item: CARD_MODULE }: CARD_MODULE): ReactElement => {
  return (
    <CardContainer className="card_container">
      <div className="card_container vidio"></div>
      <div className="card_container content">
        <div className="card_container content cardName"> ABCD </div>
      </div>
    </CardContainer>
  );
});

const CardContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 200px;
  width: auto;
  max-height: 300px;

  .card .vidio {
    border-radius: 15px;
    width: 100%;
    height: auto;
  }

  .card .content {
    width: 100%;
    height: auto;
    padding: 0px 15px;
    text-align: left;
    box-sizing: border-box;
  }
`;

export default Card;
