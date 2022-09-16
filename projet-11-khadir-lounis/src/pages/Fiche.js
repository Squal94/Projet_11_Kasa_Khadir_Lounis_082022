import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import logements from "./../assets/data/logements.json";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import { Collapse } from "../components/Collapse";
import { Slider } from "../components/Slider";
import "./../assets/img/copyright.png";
import "./../assets/img/down-arrow.png";
import { TopPage } from "../components/Util/TopPage";

const Fiche = () => {
  const [appartement, setAppartement] = useState({});
  const { appartementId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getApparts();
  });

  /**
   * Fonction getApparts
   * Permet grace au Hooks useParams de recuperer l' Id dans url et de retrouver son objet dans le Json
   * Ensuite grâce au hooks useNavigate, permet après la verification de l'Id  de rediriger la page vers une erreur 404 si celui-ci n'existe pas dans le Json
   */
  const getApparts = () => {
    if (logements.find((appart) => appart.id === appartementId)) {
      const newAppartement = logements.find(
        (appart) => appart.id === appartementId
      );
      setAppartement(newAppartement);
    } else {
      navigate("/404");
    }
  };
  return (
    <div>
      <TopPage />
      <Nav />
      <main className="fiche">
        <div className="fiche__slider">{Slider(appartement?.pictures)}</div>
        <div className="fiche__info">
          <div className="fiche__info__title">
            <h1 className="fiche__info__title--h1">{appartement.title}</h1>
            <p className="fiche__info__title--ville">{appartement.location}</p>
            <div className="fiche__tags">
              <div className="fiche__tags__container">
                {appartement.tags?.map((tag) => (
                  <div className="fiche__tags__container--tag" key={tag}>
                    {Tag(tag)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fiche__info__vendeur">
            <div className="fiche__info__vendeur--profil">
              <p className="fiche__info__vendeur--profil--name">
                {appartement.host?.name}
              </p>
              <img
                className="fiche__info__vendeur--profil--photo"
                src={appartement.host?.picture}
                alt={appartement.host?.name}
              ></img>
            </div>
            <div className="fiche__tags--note">
              {Rating(appartement.rating)}
            </div>
          </div>
        </div>

        <div className="fiche__collapse">
          <div
            className="fiche__collapse--description"
            key={appartement.description}
          >
            {Collapse(
              appartement,
              appartement.id,
              "Description",
              appartement.description
            )}
          </div>
          <div
            className="fiche__collapse--equipement"
            key={appartement.equipments}
          >
            {Collapse(
              appartement,
              appartement.id,
              "Equipement",
              appartement.equipments?.map((equipement) => {
                return <li key={equipement}>{equipement}</li>;
              })
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fiche;
