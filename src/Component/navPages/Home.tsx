import React, { useEffect, useState } from "react";
import "./pages.scss";
import styled from "styled-components";
import { navConfig } from "Component/config";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  const [navState, setNavState] = useState([]);

  useEffect(() => {
    setNavState(navConfig);
  }, []);

  return (
    <AppContainer>
      <div className="header">
        <h2>😃 Hi there! Select what puts a smile on your face. 😃</h2>
      </div>
      <HomeContainer>
        {navState.map((card) => (
          <NavLink to={card.url} className="card" key={card.id}>
            <div className="navImage">
              <img
                src={card.imgLink}
                alt={card.name || "Navigation item"}
                className="cardImage"
              />
            </div>
            <div className="cardName">{card.name}</div>
          </NavLink>
        ))}
      </HomeContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 90vh; //Full height for centering
  display: flex; /* Center children */
  flex-direction: column; /* Allows header and HomeContainer to stack */
  justify-content: center; /* Center HomeContainer vertically */
  align-items: center; /* Center HomeContainer horizontally */
  /* border: 1px solid red; Optional for debugging */
  box-sizing: border-box;
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const HomeContainer = styled.div`
  /* border: 1px solid white; */
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* Add some space between the cards */
  max-width: 1200px; /* Set a sensible max width */
  width: 90%;
  height: auto;
  margin: auto;
  /* margin-top: 20px; */
  box-sizing: border-box;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    transition: transform 0.5s ease-in-out;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-decoration: none;
    box-sizing: border-box;
    /* transition: all 0.6s ease; */
    &:hover {
      transform: scale(1.2);
    }
  }

  .navImage {
    width: 50%;
    height: 100%;
  }
  .navImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 50%; */
  }

  .cardName {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
    color: white;
  }
`;

export default Home;
