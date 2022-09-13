import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/img/Logo.png";

// Composant de la navigation

const Nav = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo de l'entreprise Kasa" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
