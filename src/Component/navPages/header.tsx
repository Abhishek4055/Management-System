import React from "react";
import { MdHome } from "react-icons/md";
import { NavLink, NavLinkProps } from "react-router-dom";

const navStyle: NavLinkProps["style"] = ({ isActive }) => ({
  color: isActive ? "#00dfa3" : "white",
  fontWeight: isActive ? "bold" : "normal",
  transition: "0.2s all",
});

const HeaderComp: React.FC = () => {
  return (
    <nav className="app-header">
      <NavLink style={navStyle} to="/" aria-label="Home">
        <MdHome style={{ cursor: "pointer" }} size={32} />
      </NavLink>
      {/* <NavLink style={navStyle} to="/swiggy">
        Swiggy
      </NavLink>
      <NavLink style={navStyle} to="/zomato">
        Zomato
      </NavLink>
      <NavLink style={navStyle} to="/employeeDatabase">
        Employee
      </NavLink>
      <NavLink style={navStyle} to="/toDoes">
        To-Does
      </NavLink> */}
      <NavLink style={navStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default HeaderComp;
