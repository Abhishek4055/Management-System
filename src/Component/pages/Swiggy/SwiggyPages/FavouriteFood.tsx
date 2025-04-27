import { useState, memo } from "react";
import Carousel from "Component/utils/crousal/Carousel";
// import jsonOBJ from "../utils/json";
import styled from "styled-components";
import { RootState } from "Redux/reduxStore";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/Config";
import LoadingPage from "Component/utils/LoadingPage";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRestroRequestBody } from "../../../../Redux/SwiggySlice";

const FavouriteFood = memo(() => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [scrollWith, setScrollWith] = useState<number>(0);
  const { allData, restroRequestBody } = useSelector(
    (state: RootState) => state?.swiggyData
  );
  const data = allData?.data?.cards[0]?.card?.card;

  const navigationHandler = (link: string) => {
    const parsedUrl = new URL(link);
    console.log("kljskfjlkjsf", parsedUrl);

    // Use URLSearchParams to extract query parameters
    const params = new URLSearchParams(parsedUrl.search);

    // Extract the values of `collection_id`, `tags`, and `type`
    const collectionId = params.get("collection_id");
    const tags = params.get("tags");
    const type = params.get("type");
    navigateTo(`/swiggy_restaurants/collection/${collectionId}`);
    dispatch(
      setRestroRequestBody({
        ...restroRequestBody,
        collection_id: collectionId,
        tags: tags,
        type: type,
      })
    );
  };

  return (
    <>
      {/* {isLoading && <LoadingPage />} */}
      <Carousel
        title={data?.header?.title}
        totalItemLength={data?.imageGridCards?.info.length}
        categoryLength={2}
        carouselDiplayingItem={6}
        nextButtonHandler={(item) => setScrollWith(item)}
        prevoiusButtonHandler={(item) => setScrollWith(item)}
      >
        {data &&
          data.imageGridCards?.info.map((item: any) => (
            // <Link to={`/swiggy_restaurants/collection/${item.id}`}>
            <FoodItem
              key={item?.id}
              scrollWith={scrollWith}
              onClick={() => navigationHandler(item.action.link)}
            >
              <div className="item_Image">
                <img
                  src={`${IMAGE_BASE_URL}${item?.imageId}`}
                  alt={item?.action?.text}
                />
              </div>
            </FoodItem>
            // </Link>
          ))}
      </Carousel>
    </>
  );
});

interface FoodItemModule {
  scrollWith: number;
}
const FoodItem = styled.div<FoodItemModule>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  border-radius: 8px;
  transform: ${({ scrollWith }) => `translateX(${scrollWith * -100}%)`};
  width: 147px;
  flex-shrink: 0;
  transition: all 0.75s;
  .item_Image {
    margin-bottom: 10px;
    width: 90%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .item_type {
    font-weight: 600;
    text-align: center;
    color: #02060c99;
  }
`;

export default FavouriteFood;
