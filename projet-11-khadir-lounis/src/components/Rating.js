import React from "react";
import { useEffect } from "react";
import { ReactComponent as Star } from "./../assets/img/star.svg";

export function Rating(nb) {
  const numberOfStar = [1, 2, 3, 4, 5];

  useEffect(() => {
    handleRating(nb);
  });

  const handleRating = (rate) => {
    for (let i = 1; i <= rate; i++) {
      const starColorModif = document.querySelector(".star" + i);
      starColorModif.setAttribute("fill", "#ff6060");
    }
  };

  return (
    <div className="container__rate">
      {numberOfStar.map((star) => {
        return (
          <Star
            className={"star" + star}
            key={"star" + star}
            fill="#E3E3E3"
            height={"30px"}
          ></Star>
        );
      })}
    </div>
  );
}
