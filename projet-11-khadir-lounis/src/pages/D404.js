import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";

const D404 = () => {
  return (
    <div>
      <Nav />
      <main className="main__404">
        <h1 className="main__404--title">404</h1>
        <p className="main__404--txt">
          Oups! la page que vous demandez n'existe pas.
        </p>
        <NavLink className="main__404--btn" to="/">
          Retourner sur la page accueil
        </NavLink>
      </main>
      <Footer />
    </div>
  );
};

export default D404;
