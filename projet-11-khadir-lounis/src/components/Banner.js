import React from "react";

/**
 * Fonction Banner
 * @param {txt} texte a entrée pour afficher un texte dans la bannière
 * @param {classname} class Insertion d'une class
 * Fonctionnalité qui permet de créer une bannière personnalisée a chaque utilisation.
 * En ajoutant un texte si besoin, et une class pour ajouter un background different .
 */

export function Banner(txt, classname) {
  return (
    <div className={classname}>
      <h1 className="banner__title">{txt}</h1>
    </div>
  );
}
