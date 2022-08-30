import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/about">
        <li>A Propos</li>
      </NavLink>
    </div>
  );
};

export default Nav;
