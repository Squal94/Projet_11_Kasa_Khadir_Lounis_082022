import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/**
 * Fonction Card
 * @param {props} props  données transmises lors de l'appel de la function
 * Fonctionnalité utilisée dans un map pour créer une carte pour chaque appartement
 */

const Card = (props) => {
  const [appartement, setAppartement] = useState(props.object);

  useEffect(() => {
    setAppartement(props.object);
  }, [props]);

  return (
    <div className="card" key={appartement.id}>
      <img className="card--img" src={appartement.cover} alt="" />
      <h2 className="card__title">{appartement.title}</h2>
    </div>
  );
};

export default Card;
