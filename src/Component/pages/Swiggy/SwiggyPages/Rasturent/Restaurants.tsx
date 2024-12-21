import { memo, useState } from "react";
// import styled from "styled-components";
import RestroCard from "../../utils/RestroCard";
import Carousel from "Component/utils/crousal/Carousel";
import { RootState } from "../../../../../Redux/reduxStore";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Restaurants() {
  const [scrollWith, setScrollWith] = useState<number>(0);
  const { allData } = useSelector((state: RootState) => state?.swiggyData);

  const data = allData?.data?.cards[1]?.card?.card;
  // console.log(data);
  return (
    <Wrapper className="wrapper">
      <Carousel
        title={data?.header?.title}
        totalItemLength={data?.gridElements?.infoWithStyle?.restaurants.length}
        categoryLength={1}
        carouselDiplayingItem={3}
        nextButtonHandler={(item) => setScrollWith(item)}
        prevoiusButtonHandler={(item) => setScrollWith(item)}
      >
        {data?.gridElements &&
          data?.gridElements?.infoWithStyle?.restaurants.map((item: any) => (
            <RestroCard
              scrollWith={scrollWith}
              item={item.info}
              key={item.info.id}
            />
          ))}
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  .crousel_container .list_item {
    gap: 20px;
  }
`;
export default memo(Restaurants);
