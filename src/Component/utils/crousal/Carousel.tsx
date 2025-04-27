import styled from "styled-components";
import { ReactNode, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface CAROUSEL_props {
  title: string;
  totalItemLength: number;
  children?: ReactNode;
  nextButtonHandler: (number) => any;
  prevoiusButtonHandler: (number) => any;
  categoryLength?: number;
  carouselDiplayingItem: number;
}

function Carousel({
  title,
  totalItemLength,
  carouselDiplayingItem = 6,
  categoryLength = 2,
  nextButtonHandler,
  prevoiusButtonHandler,
  children,
}: CAROUSEL_props) {
  const [scrollBy, setScrollBy] = useState<number>(0);
  const [isBackDisable, setIsBackDisable] = useState<boolean>(true);
  const [isnextDisable, setIsnextDisable] = useState<boolean>(false);

  const forwardButtonClickHandler = () => {
    setScrollBy((prev) => {
      const newData = prev + categoryLength;
      nextButtonHandler(newData);
      if (totalItemLength - newData === carouselDiplayingItem) {
        setIsnextDisable(true);
      } else {
        setIsBackDisable(false);
      }
      return newData;
    });
  };

  const backwardButtonClickHandler = () => {
    setScrollBy((prev) => {
      const newData = prev - categoryLength;
      prevoiusButtonHandler(newData);
      if (!newData) {
        setIsBackDisable(true);
      } else {
        setIsnextDisable(false);
      }
      return newData;
    });
  };

  console.log(scrollBy);
  return (
    <>
      <Container className="crousel_container">
        <div className="header">
          <h2>{title}</h2>
          <div className="carousal_button ">
            <button
              className={` arrow_back_btn ${
                isBackDisable ? "no_item__reamin" : ""
              }`}
              disabled={isBackDisable}
              onClick={backwardButtonClickHandler}
            >
              <FaArrowLeft />
            </button>
            <button
              className={` arrow_btn ${isnextDisable ? "no_item__reamin" : ""}`}
              disabled={isnextDisable}
              onClick={forwardButtonClickHandler}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <List className="list_item">{children}</List>
      </Container>
      <hr />
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 10px;
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    .carousal_button {
      display: flex;
      gap: 10px;
      .arrow_btn {
        border-radius: 50%;
        width: 34px;
        height: 34px;
        padding: 5px;
        background: #02060c26;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        transition: all 0.5s;
      }
      .arrow_back_btn {
        border-radius: 50%;
        width: 34px;
        height: 34px;
        padding: 5px;
        background: #02060c26;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
      }
      .no_item__reamin {
        background-color: #40424525;
        cursor: auto;
      }
    }
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background: #dedede;
    border-radius: 10px;
    margin: 2px 500px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff0000;
    border-radius: 10px;
  }
`;

export default Carousel;
