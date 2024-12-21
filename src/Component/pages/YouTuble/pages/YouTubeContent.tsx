import React from "react";
import styled from "styled-components";
import Card from "../Utils/Card";

function YouTubeContent() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
  let item: object;

  console.log(arr);
  return (
    <Container>
      {arr.map((item, ind) => (
        <Card key={ind} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.main`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export default YouTubeContent;
