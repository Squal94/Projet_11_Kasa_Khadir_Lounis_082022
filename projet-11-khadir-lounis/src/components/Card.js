import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/**
 * Fonction Card
 * @param {props} props  données transmises lors de l'appel de la function
 * Fonctionnalité utilisée dans un map pour créer une carte pour chaque appartement
 */

const Card = (props) => {
  const [object, setObjects] = useState(props);

  useEffect(() => {
    setObjects(props);
  }, [props]);

  console.log(object);

  return (
    <div className="card" key={object.object.id}>
      <img className="card--img" src={object.object.cover} alt="" />
      <h2 className="card__title">{object.object.title}</h2>
    </div>
  );
};

export default Card;
