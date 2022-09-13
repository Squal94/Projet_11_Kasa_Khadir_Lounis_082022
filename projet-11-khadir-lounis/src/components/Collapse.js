import React from "react";
import { useState } from "react";
import arrowDown from "./../assets/img/down-arrow.png";

/**
 * Fonction Collapse
 * @param {id} id permet de selectionner dans une base de donnée l'objet precis a recuperer
 * @param {title} title Insertion du titre du collapse
 * @param {description} description Insertion du contenu du collapse
 *
 * Fonctionnalité qui permet de créer un collapse de maniere dynamique
 */

export function Collapse(pics, id, title, description) {
  // Ces trois Hooks use state permette de gérer l'état de la flèche du collapse au fur et à mesure de leur utilisation
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

  return (
    <div className="collapse" id={id}>
      <div className="collapse__container">
        <button className="collapse__container__btn" onClick={() => Rotate()}>
          {title}
        </button>
        <img className={isRotate} src={arrowDown} alt="Arrow" />
      </div>
      {isOpen && <div className="collapse__content">{description}</div>}
    </div>
  );
}
