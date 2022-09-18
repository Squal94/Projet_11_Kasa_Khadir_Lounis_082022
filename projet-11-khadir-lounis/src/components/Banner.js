import React from "react";

/**
 * Fonction Banner
 * @param {txt} texte à entrée pour afficher un texte dans la bannière
 * @param {classname} class Insertion d'une classe
 * Fonctionnalité qui permet de créer une bannière personnalisée à chaque utilisation.
 * En ajoutant si besoin un texte , et une class pour ajouter un background different .
 */

export function Banner(txt, classname) {
  return (
    <div className={classname}>
      <h1 className="banner__title">{txt}</h1>
    </div>
  );
}
