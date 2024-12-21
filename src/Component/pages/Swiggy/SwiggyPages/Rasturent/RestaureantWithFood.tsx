import React, { memo } from "react";
import styled from "styled-components";
import RestroCard from "../../utils/RestroCard";

function RestaureantWithFood({ title, data }: { title?: "string"; data: any }) {
  console.log("myData", title, data);
  return (
    <Container>
      <RestroContainer>
        {title && <h2 className="topRestorent">{title}</h2>}
        <RestroCardcontainer>
          {data &&
            data?.map((item: any) => (
              <RestroCard item={item.info} key={item.info.id} />
            ))}
        </RestroCardcontainer>
      </RestroContainer>
    </Container>
  );
}

export default memo(RestaureantWithFood);

const Container = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 10px;
  background: white;
`;

const RestroContainer = styled.div`
  width: inherit;
`;
const RestroCardcontainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  .card {
    width: auto;
    height: 225px;
    margin-bottom: 0px;
  }
  .card .image {
    width: 100%;
    height: 65%;
  }
  .image img {
    width: 100%;
    height: 100%;
  }
`;
