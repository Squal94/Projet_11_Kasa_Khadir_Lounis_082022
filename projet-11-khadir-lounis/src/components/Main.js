import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import logements from "../logements.json";

const Main = () => {
  return (
    <main className="main">
      {logements.map((logement) => {
        return (
          <NavLink
            id={logement.id}
            key={logement.id}
            to={"fiche/" + logement.id}
          >
            {Card(logement)}
          </NavLink>
        );
      })}
    </main>
  );
};

export default Main;
