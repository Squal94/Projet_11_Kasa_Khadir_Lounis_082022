import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fonction TopPage
 * @param {path} A chaque changement url
 * Fonctionnalité qui permet de remettre en haut de page l'écran après le chargement d'une nouvelle URL
 */

export function TopPage() {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}
