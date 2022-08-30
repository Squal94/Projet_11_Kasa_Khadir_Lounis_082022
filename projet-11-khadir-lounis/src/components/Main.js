import React from "react";
//import { card } from "./Card";
import logements from "../logements.json";
// import { Data } from "./Data";

const Main = () => {
  return (
    <main className="main">
      {logements.map((logement) => {
        return (
          <div className="card" key={logement.id}>
            <img className="card--img" src={logement.cover} alt="" />
            <h2 className="card__title">{logement.title}</h2>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
