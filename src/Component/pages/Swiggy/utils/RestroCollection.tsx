import useAxiosAPICall from "Component/customHooks/axiosApiCall";
import React from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RESTRO_BASE_URL } from "./Config";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/reduxStore";
import RestaureantWithFood from "../SwiggyPages/Rasturent/RestaureantWithFood";
import LoadingPage from "Component/utils/LoadingPage";
// import RestaureantWithFood from "../SwiggyPages/Rasturent/RestaureantWithFood";

function RestroCollection() {
  const parem = useParams();
  const { restroRequestBody } = useSelector(
    (state: RootState) => state?.swiggyData
  );
  const { collection_id, header_title, tags, type } = restroRequestBody;
  // console.log("RestroURL", collection_id);
  let URL = `${RESTRO_BASE_URL}&collection=${collection_id}&tags=${tags}&sortBy=&filters=&type=${type}&offset=0&page_type=null`;

  const { isLoading, data, error } = useAxiosAPICall({
    url: URL,
    method: "get",
  });

  const restroData =
    data &&
    data?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  console.log("resproData", error);
  return (
    <Collection>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          {restroData && <RestaureantWithFood data={restroData} />}
        </FadeIn>
      )}
    </Collection>
  );
}

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

const Collection = styled.div`
  border: 1px solid;
  margin: auto;
  margin-top: 80px;
  margin-left: calc(10% + 36px);
  margin-right: calc(10% + 36px);
  box-sizing: border-box;
  padding-top: 80px;
`;
export default RestroCollection;
