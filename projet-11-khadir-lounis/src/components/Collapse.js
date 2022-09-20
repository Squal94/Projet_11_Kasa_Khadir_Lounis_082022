import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import arrowDown from "./../assets/img/down-arrow.png";

/**
 * Fonction Collapse
 * @param {props} id permet de selectionner dans une base de donnée l'objet precis à recuperer
 * @param {content} description Insertion du contenu du collapse
 *
 * Fonctionnalité qui permet de créer un collapse de maniere dynamique
 */

const Collapse = (props, content) => {
  // Ces trois Hooks useState permettent de gérer l'état de la flèche du collapse au fur et à mesure de leur utilisation
  let idCollapse = "";
  let titleCollapse = "";
  let descriptionCollapse = "";

  const [setObject, setObjectState] = useState(props.object);
  const [setContent, setContentState] = useState(content);
  const [setActive, setActiveState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState("collapse__container__img");

  useEffect(() => {
    setObjectState(props.object);
    setContentState(props.content);
  }, [props]);

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
  if (setObject.cover) {
    idCollapse = setObject.id;
    if (Array.isArray(setContent)) {
      titleCollapse = "Equipements";
      descriptionCollapse = setContent.map((equipement) => {
        return <li key={equipement}>{equipement}</li>;
      });
    } else {
      titleCollapse = "Description";
      descriptionCollapse = setContent;
    }
  } else {
    idCollapse = setObject.id;
    titleCollapse = setObject.title;
    descriptionCollapse = setObject.description;
  }

  return (
    <div className="collapse" id={idCollapse}>
      <div className="collapse__container">
        <button className="collapse__container__btn" onClick={() => Rotate()}>
          {titleCollapse}
        </button>
        <img className={isRotate} src={arrowDown} alt="Arrow" />
      </div>
      {isOpen && <div className="collapse__content">{descriptionCollapse}</div>}
    </div>
  );
};

export default Collapse;
