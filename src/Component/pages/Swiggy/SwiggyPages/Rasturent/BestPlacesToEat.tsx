import React, { memo } from "react";
import CuisinsCard from "../../utils/CuisinsCard";
import styled from "styled-components";
import { RootState } from "../../../../../Redux/reduxStore";
import { useSelector } from "react-redux";

function BestPlacesToEat() {
  const { allData } = useSelector((state: RootState) => state?.swiggyData);

  const data = allData?.data?.cards[6]?.card?.card;
  // console.log(data);
  // const { title, brands } = jsonOBJ.data.cards[6].card.card;
  return (
    <Container>
      <h2>{data && data.title}</h2>
      <div className="content">
        {data &&
          data.brands.map((item, ind) => <CuisinsCard key={ind} item={item} />)}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* margin-top: 50px; */
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 16px;
    gap: 20px;
  }
  .content .location {
  }
`;
export default memo(BestPlacesToEat);
