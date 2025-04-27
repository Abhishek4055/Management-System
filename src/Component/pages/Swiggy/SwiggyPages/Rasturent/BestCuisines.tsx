import React, { memo } from "react";
import styled from "styled-components";

import CuisinsCard from "../../utils/CuisinsCard";
import { RootState } from "../../../../../Redux/reduxStore";
import { useSelector } from "react-redux";

const BestCuisines = memo(() => {
  const { allData } = useSelector((state: RootState) => state?.swiggyData);

  const data = allData?.data?.cards[7]?.card?.card;
  // console.log(data);
  // const { title, b = allData.data.cards[7].card.card;
  return (
    <Container>
      <h2>{data?.title}</h2>
      <div className="content">
        {data &&
          data.brands.map((item, ind) => <CuisinsCard key={ind} item={item} />)}
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 16px;
    gap: 20px;
  }
  .content .location {
  }
`;

export default BestCuisines;
