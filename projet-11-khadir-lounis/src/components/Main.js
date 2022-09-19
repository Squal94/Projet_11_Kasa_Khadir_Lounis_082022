import React from "react";
import { NavLink } from "react-router-dom";
import logements from "../assets/data/logements.json";
import Card from "./Card";

const Main = () => {
  return (
    // Map sur tous les objets du Json Afin de créer des cartes de chaque appartement grace au composant card
    // Navlink permet de crée une carte cliquable ainsi que son chemin .
    <main className="main">
      {logements.map((logement) => {
        return (
          <NavLink
            id={logement.id}
            key={logement.id}
            to={"fiche/" + logement.id}
          >
            <Card object={logement} />
          </NavLink>
        );
      })}
    </main>
  );
};

export default Main;
