import React from "react";
import arrowLeft from "./../assets/img/arrowLeft.png";
import arrowRight from "./../assets/img/arrowRight.png";
//import logements from "./../logements.json";
import { useState } from "react";
//import { useEffect } from "react";

export function Slider(images) {
  // let appartGallery = [];
  let length = images?.length;

  const [index, setIndex] = useState(0);

  //const [setActive, setActiveState] = useState("");
  //const [isOpen, setIsOpen] = useState(false);
  //const [indexInit, setindexInit] = useState("");
  //const [lengthInit, setLengthInit] = useState("");
  // const [picsTableau, setPicsTableau] = useState([]);
  // const [affichagePics, setAffichagePics] = useState("");

  // useEffect(() => {
  //   setPicsTableau(images);
  // }, [images]);

  // const initValue = async (array) => {
  // const left = document.querySelector(".slider__container--left");
  // const right = document.querySelector(".slider__container--right");
  // const arrowleft = document.querySelector(".slider__container--left--pic");
  // const arrowright = document.querySelector(".slider__container--right--pic");
  //index = 0;

  // appartGallery = await array;
  // length = appartGallery?.length;
  // if (length <= 1) {
  //   left.setAttribute("display", "none");
  //   right.setAttribute("display", "none");
  //   arrowleft.setAttribute("opacity", "none");
  //   arrowright.setAttribute("display", "none");
  // } else {
  //   left.setAttribute("display", "flex");
  //   right.setAttribute("display", "flex");
  //   arrowleft.setAttribute("display", "block");
  //   arrowright.setAttribute("display", "block");
  // }
  // };
  // initValue(picsTableau);

  // useEffect(() => {
  //   setAffichagePics(picsTableau?.[0]);
  // }, [picsTableau]);
  // function none() {
  //   const left = document.querySelector(".slider__container--left");
  //   const right = document.querySelector(".slider__container--right");
  //   const arrowleft = document.querySelector(".slider__container--left--pic");
  //   const arrowright = document.querySelector(".slider__container--right--pic");
  //   if (length <= 1) {
  //     left.setAttribute("display", "none");
  //     right.setAttribute("display", "none");
  //     arrowleft.setAttribute("opacity", "none");
  //     arrowright.setAttribute("display", "none");
  //   } else {
  //     left.setAttribute("display", "flex");
  //     right.setAttribute("display", "flex");
  //     arrowleft.setAttribute("display", "block");
  //     arrowright.setAttribute("display", "block");

  //   }
  // }
  // none();

  function clickLeft() {
    setIndex(index === 0 ? length - 1 : index - 1);
  }

  function clickRight() {
    setIndex(index === length - 1 ? 0 : index + 1);
  }

  return (
    <div className="slider">
      <div className="slider__container">
        {length > 1 && (
          <div onClick={clickLeft} className="slider__container--left">
            <img
              className="slider__container--left--pic"
              src={arrowLeft}
              alt="slider a gauche"
            />
          </div>
        )}
        <img
          className="slider__container__image"
          src={images?.[index]}
          alt=""
        />
        {length > 1 && (
          <div onClick={clickRight} className="slider__container--right">
            <img
              className="slider__container--right--pic"
              src={arrowRight}
              alt="slider a droite"
            />
          </div>
        )}
      </div>
    </div>
  );
}
