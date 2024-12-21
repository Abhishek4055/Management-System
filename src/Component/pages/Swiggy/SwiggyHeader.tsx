import React from "react";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NEV_LIST } from "./utils/Config";
import { HiChevronDown } from "react-icons/hi";
import { NEV_ITEM_MODAL } from "./utils/modal";

const SwiggyHeader = React.memo(() => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Content>
        <div className="logo">
          <MdHome cursor="pointer" size={32} onClick={() => navigate("/")} />
          <div className="logo" onClick={() => navigate("/swiggy_restaurants")}>
            <img
              src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-healthy-food-logo-template-emblem-design-concept-creative-symbol-icon-png-image_5181036.jpg"
              alt="App Logo"
            />
          </div>
          <ListItem>
            <span className="other">Other</span>
            <HiChevronDown className="inline" size={20} />
          </ListItem>
        </div>
        <nav className="nav__links">
          {NEV_LIST.map((item: NEV_ITEM_MODAL) => (
            <ListItem key={item.id}>
              {item.icon}
              {item.link}
              <sub>{item?.subText}</sub>
            </ListItem>
          ))}
        </nav>
      </Content>
    </HeaderContainer>
  );
});

const HeaderContainer = styled.div`
  top: 0px;
  position: fixed;
  width: 100%;
  /* box-shadow: #1b1e2419 0px 8px 16px 0px; */
  box-shadow: inset 0 0 6px #7d95ad;
  box-sizing: border-box;
  background-color: #ffffff;
  z-index: 1000;
`;
const Content = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin: 2px 40px;
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    img {
      width: 75px;
      height: 75px;
    }
  }
  .nav__links {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }

  .other {
    text-decoration: underline;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;

  &:hover {
    color: #fa6200;
    cursor: pointer;
  }

  sub {
    color: #fa6200;
  }
`;

export default SwiggyHeader;
