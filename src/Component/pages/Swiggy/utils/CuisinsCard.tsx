import React from "react";
import styled from "styled-components";
import { CUISINS__CARD__MODAL } from "./modal";
import { NavLink } from "react-router-dom";

function CuisinsCard({ item }: { item: CUISINS__CARD__MODAL }) {
  return (
    <Card className="location">
      <NavLink className="item_link" to={item.link} aria-label={item.text}>
        <div className="text">{item.text}</div>
      </NavLink>
    </Card>
  );
}

const Card = styled.div`
  width: auto;
  .item_link {
    text-decoration: none;
    color: inherit;
    outline: 0px;
    width: calc(25% - 32px);
    margin: 0px 16px 16px;
    .text {
      padding: 16px;
      box-sizing: border-box;
      border: 1.5px solid #02060c19;
      border-radius: 12px;
      width: 100%;
      height: auto;
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #000000bf;
      text-align: center;
    }
  }
`;

export default CuisinsCard;
