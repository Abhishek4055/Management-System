import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function YouTubeHeader() {
  const navigate = useNavigate();
  return (
    <Nav className="app-header">
      <MdHome
        className="inline"
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate("/")}
        size={32}
      />
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 30px;
  background-color: #000000;
`;

export default YouTubeHeader;
