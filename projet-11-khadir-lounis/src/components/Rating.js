import React from "react";
import { useEffect } from "react";
import { ReactComponent as Star } from "./../assets/img/star.svg";

/**
 * Fonction Rating
 * @param {nb} nb valeur récupérée dans chaque objet du Json "rating"
 * Fonctionnalité qui permet d'afficher sous forme d'étoile les notes données au propriétaire
 */

export const Rating = (nb) => {
  const numberOfStar = [1, 2, 3, 4, 5];

  useEffect(() => {
    handleRating(nb.rate);
  });

  /**
   * Fonction handleRating
   * @param {rate} rate correspond au nb valeur récupérée dans chaque objet du Json "rating"
   * Fonctionnalité qui permet grâce au setAttribute fill de changer la couleur du svg Etoile si elle est sélectionnée
   */

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
};
