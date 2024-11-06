import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../utils/Button";
import "./pages.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>This is Home Component</h2>
      <div>
        <Button className="scondery-btn" onClick={() => navigate("toDoes")}>
          Clear here to Add the Does
        </Button>
        <br />
        <Button
          className="scondery-btn"
          onClick={() => navigate("order_summary")}
        >
          Click here to check the Navigation Functionality.
        </Button>
      </div>
    </>
  );
};
export default Home;
