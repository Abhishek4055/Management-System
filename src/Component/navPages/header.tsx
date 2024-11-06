import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComp: React.FC = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "rgb(179, 174, 240)" : "white",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav className="app-header">
      <NavLink style={navStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default HeaderComp;
