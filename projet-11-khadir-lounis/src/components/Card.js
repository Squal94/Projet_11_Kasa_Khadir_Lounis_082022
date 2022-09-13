import React from "react";

/**
 * Fonction Card
 * @param {props} props  données transmises lors de l'appel de la function
 * Fonctionnalité utilisée dans un map pour créer une carte pour chaque appartement
 */

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img className="card--img" src={props.cover} alt="" />
      <h2 className="card__title">{props.title}</h2>
    </div>
  );
}

export default Card;
