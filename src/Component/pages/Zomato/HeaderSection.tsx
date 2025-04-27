import styled from "styled-components";
import zomatoImage from "./Assets/zomatoImage.png";
import { MdHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import InputField from "Component/utils/InputFields";
import { MdLocationPin } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <ZomatoHeader>
      <Header>
        <MdHome cursor="pointer" size={32} onClick={() => navigate("/")} />
        <div className="right_side">
          <span className="header_text"> Invester Relations</span>
          <span className="header_text"> Add Restaurant</span>
          <span className="header_text"> Log In</span>
          <span className="header_text"> Sign up</span>
        </div>
      </Header>
      <Body>
        {/* <Image src={zomatoTextImage} alt="Zomato" /> */}
        <h1> zomato</h1>
        <BodyText> Discover the best food & drinks in Bengaluru </BodyText>
        <Search>
          <Location>
            <span className="location_text">
              <MdLocationPin cursor="pointer" size={25} color="orange" />{" "}
              Bengaluru
            </span>
            <FaCaretDown size={25} margin-left={10} />
          </Location>
          <div className="search" color="black">
            <CiSearch size={25} />
            <InputField
              className="searchInput"
              inputType="text"
              // placeholder="Search of Restaurant "
              value="kjfhsk"
            />
          </div>
        </Search>
      </Body>
    </ZomatoHeader>
  );
};

const ZomatoHeader = styled.div`
  background-image: url(${zomatoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;

  width: 100%;
  height: 400px;
  color: white;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  .right_side {
    .header_text {
      cursor: pointer;
      /* &:hover */
    }
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  padding: 20px 40px;
  box-sizing: border-box;
  .right_side {
    display: flex;
    gap: 3rem;
  }
`;
const Body = styled.div`
  h1 {
    font-size: 80px;
    margin: 0px;
    padding: 0px;
    font-family: "Knewave", system-ui;
    font-weight: 800;
    font-style: italic;
  }
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
`;

const BodyText = styled.p`
  font-weight: 500;
  font-size: 29px;
  letter-spacing: 2px;
  word-spacing: 3px;
  box-sizing: border-box;
  text-align: center;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66%;
  padding: 15px 30px;
  box-sizing: border-box;

  border-radius: 15px;
  background-color: #f0f8ff;
  color: black;
  gap: 15px;
  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .searchInput {
      width: 100%;
      padding: 5px 10px;
      border: none;
      background-color: transparent;
      font-size: 13px;
      color: #444444;
      letter-spacing: 1px;
      word-spacing: 4px;
      border: none;
      font-weight: 300;
      font-family: "Montserrat", sans-serif;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 300;
  border-right: 1px solid #d2d2d2;
  padding-right: 10px;
  color: #444444;
  width: 40%;
  &:hover {
    cursor: pointer;
  }
  .location_text {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    align-items: center;
    gap: 5px;
  }
`;

export default HeaderSection;
