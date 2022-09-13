import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import logements from "../assets/data/logements.json";

const Main = () => {
  return (
    // Map sur tout les objets du Json Afin de de crée des cartes de chaque appartement grace au composant card
    // Navlink permet de crée une carte cliquable ainsi que son chemin .
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
