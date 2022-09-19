import React from "react";
import { useState } from "react";
import arrowDown from "./../assets/img/down-arrow.png";
import "../assets/data/collapses.json";

/**
 * Fonction Collapse
 * @param {id} id permet de selectionner dans une base de donnée l'objet precis à recuperer
 * @param {title} title Insertion du titre du collapse
 * @param {description} description Insertion du contenu du collapse
 *
 * Fonctionnalité qui permet de créer un collapse de maniere dynamique
 */

const Collapse = (props) => {
  // Ces trois Hooks useState permettent de gérer l'état de la flèche du collapse au fur et à mesure de leur utilisation
  const [setActive, setActiveState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState("collapse__container__img");

  // Fonction de rotation de la flèche du collapse selon l'État des Hooks
  function Rotate() {
    setActiveState(setActive === "" ? "active" : "");
    setIsOpen(setActive === "active" ? false : true);
    setIsRotate(
      setActive === "active"
        ? "collapse__container__img"
        : "collapse__container__img rotate"
    );
  }

  console.log(props.object.id);

  return (
    <div className="collapse" id={props.object.id}>
      <div className="collapse__container">
        <button className="collapse__container__btn" onClick={() => Rotate()}>
          {props.object.title}
        </button>
        <img className={isRotate} src={arrowDown} alt="Arrow" />
      </div>
      {isOpen && (
        <div className="collapse__content">{props.object.description}</div>
      )}
    </div>
  );
};

export default Collapse;

//  {Collapse(
//               appartement,
//               appartement.id,
//               "Description",
//               appartement.description
//             )}
//           </div>
//           <div
//             className="fiche__collapse--equipement"
//             key={appartement.equipments}
//           >
//             {Collapse(
//               appartement,
//               appartement.id,
//               "Equipement",
//               appartement.equipments?.map((equipement) => {
//                 return <li key={equipement}>{equipement}</li>;
//               })
