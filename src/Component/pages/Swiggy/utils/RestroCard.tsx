import React, { memo } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "./Config";

const RestroCard = ({ item, scrollWith }: any) => {
  return (
    <Card scrollWith={scrollWith} className="card">
      <div className="image">
        <img
          src={`${IMAGE_BASE_URL}${item?.cloudinaryImageId}`}
          alt={item?.name}
        />
        {item?.aggregatedDiscountInfoV3?.header && (
          <div className="about__pricing">
            {`${item?.aggregatedDiscountInfoV3?.header} ${item?.aggregatedDiscountInfoV3?.subHeader}`}
          </div>
        )}
      </div>
      <div className="content">
        <div className="restro_name"> {item?.name} </div>
        <div className="rating_timing">
          <div className="rating">
            <FaStar className="inline" color="white" />
          </div>
          <div className="timing">
            <span>{item?.avgRatingString}</span>
            <span> . {item?.sla?.slaString}</span>
          </div>
        </div>
        <div className="location">{item?.areaName}</div>
      </div>
    </Card>
  );
};

interface CardItemModule {
  scrollWith: number;
}
const Card = styled.div<CardItemModule>`
  font-family: Montserrat, sans-serif;
  border-radius: 16px;
  overflow: hidden;
  max-width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* transition: all 0.6s ease; */
  color: #02060c99;
  background-color: white;
  cursor: pointer;
  width: 270px;
  flex-shrink: 0;
  transform: ${({ scrollWith }) => `translateX(${scrollWith * -100}%) ease`};
  transition: all 0.75s;
  margin-bottom: 20px;

  .image {
    width: 100%;
    height: 60%;
    overflow: hidden;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(0.9);
    }
  }

  .image img {
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 0;
  }

  .image::after {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* background: rgb(173, 171, 173); */
    background: rgb(173, 171, 173);
    background: linear-gradient(
      180deg,
      rgba(173, 171, 173, 1) 0%,
      rgba(125, 114, 103, 1) 75%,
      rgba(27, 30, 36, 1) 100%
    );
    z-index: 1;
  }

  .about__pricing {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-style: normal;
    position: absolute;
    top: 125px;
    font-size: 18px;
    line-height: 14px;
    margin-bottom: 0px;
    color: #ffffff;
    z-index: 105;
    padding-left: 5px;
    &:hover {
      transform: scale(0.95);
    }
  }

  .image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
    z-index: 1;
  }
  .content {
    padding: 0px 15px;
    text-align: left;
    box-sizing: border-box;
  }

  .restro_name {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: rgba(2, 6, 12, 0.92);
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    overflow-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .rating_timing {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 2px;
    gap: 2px;
    grid-auto-flow: column;
    -webkit-box-pack: start;
    justify-content: start;
  }
  .rating_timing .rating {
    background-color: green;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location {
    font-weight: 200;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #02060c99;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    overflow-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export default memo(RestroCard);
