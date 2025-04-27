import React from "react";
// import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = React.memo(({ message }: { message?: string }) => {
  // const history = useHistory();

  return (
    <ErroContainer>
      <div className="content">
        <h3>Oops!...</h3>
        <p>{message}</p>
        <Link to="/"> Go To Home </Link>
      </div>
    </ErroContainer>
  );
});

const ErroContainer = styled.div`
  height: 100vh;
  display: flex;
  .content {
    width: auto;
    margin: auto;
    text-align: center;
  }
`;

export default ErrorPage;
