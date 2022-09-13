import React from "react";
import arrowLeft from "./../assets/img/arrowLeft.png";
import arrowRight from "./../assets/img/arrowRight.png";
import { useState } from "react";

export function Slider(images) {
  let length = images?.length;

  const [index, setIndex] = useState(0);

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
        <div className="slider__container__count">
          <p>
            {index + 1}/{length}
          </p>
        </div>
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
