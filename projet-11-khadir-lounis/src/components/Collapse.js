import React from "react";
import { useState } from "react";
import arrowDown from "./../assets/img/down-arrow.png";

export function Collapse(pics, id, title, description) {
  const [setActive, setActiveState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState("collapse__container__img");

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
