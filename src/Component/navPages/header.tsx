import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComp: React.FC = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "#00dfa3" : "white",
      fontWeight: isActive ? "bold" : "normal",
      transition: " 0.2s all",
    };
  };

  return (
    <nav className="app-header">
      <NavLink style={navStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} to="/employeeDatabese">
        Employee
      </NavLink>
      <NavLink style={navStyle} to="/toDoes">
        To-Does
      </NavLink>
      <NavLink style={navStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default HeaderComp;
