import React from "react";
import arrowLeft from "./../assets/img/arrowLeft.png";
import arrowRight from "./../assets/img/arrowRight.png";
//import logements from "./../logements.json";
import { useState } from "react";
import { useEffect } from "react";

export function Slider(images) {
  // let appartGallery = [];
  //   const [setActive, setActiveState] = useState("");
  //   const [isOpen, setIsOpen] = useState(false);
  const [picsTableau, setPicsTableau] = useState([]);
  useEffect(() => {
    setPicsTableau(images);
  }, [images]);

  // const lengthTableau = async (array) => {
  //   appartGallery = await array;
  //   console.log(appartGallery);
  // };

  // function clickLeft(index) {

  // }

  // lengthTableau(picsTableau);

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__container--left">
          <img
            className="slider__container--left--pic"
            src={arrowLeft}
            alt="slider a gauche"
          />
        </div>
        <img src={picsTableau} alt="" />
        <div className="slider__container--right">
          <img
            className="slider__container--right--pic"
            src={arrowRight}
            alt="slider a droite"
          />
        </div>
      </div>
    </div>
  );
}
