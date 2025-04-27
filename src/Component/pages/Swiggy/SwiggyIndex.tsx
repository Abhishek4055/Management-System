import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Restaurants from "./SwiggyPages/Rasturent/Restaurants";
import FavouriteFood from "./SwiggyPages/FavouriteFood";
import RestaureantWithFood from "./SwiggyPages/Rasturent/RestaureantWithFood";
import BestCuisines from "./SwiggyPages/Rasturent/BestCuisines";
import BestPlacesToEat from "./SwiggyPages/Rasturent/BestPlacesToEat";
import SwiggyFooter from "./Footer";
import useGetAPI from "Component/customHooks/axiosApiCall";
import { SWIGGYG_GET_API } from "./utils/Config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/reduxStore";
import LoadingPage from "Component/utils/LoadingPage";
import ErrorPage from "Component/utils/ErrorPage";
import { setAllData } from "../../../Redux/SwiggySlice";

const SwiggyIndex = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useGetAPI({
    url: SWIGGYG_GET_API,
    method: "get",
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setAllData(data));
    }
  }, [data]);

  console.log("FullData", data, error, isLoading);

  return (
    <Container>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {error && <ErrorPage message={error} />}
          {data && (
            <>
              <FavouriteFood />
              <Restaurants />
              <RestaureantWithFood
                title={data?.data?.cards[2]?.card?.card?.title}
                data={
                  data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
                }
              />
              <hr />
              <BestPlacesToEat />
              <BestCuisines />
              <SwiggyFooter />
            </>
          )}
        </>
      )}
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  height: inherit;
  position: relative;
  margin-left: calc(10% + 36px);
  margin-right: calc(10% + 36px);
  margin-top: 80px;

  align-items: center;
  flex-direction: column;
  h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
    color: #02060cea;
  }
`;

export default SwiggyIndex;
