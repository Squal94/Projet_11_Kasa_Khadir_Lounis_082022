import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import logements from "./../logements.json";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import { Collapse } from "../components/Collapse";
import "./../assets/img/copyright.png";
import "./../assets/img/down-arrow.png";

const Fiche = () => {
  const [appartement, setAppartement] = useState({});
  const { appartementId } = useParams();
  useEffect(() => {
    getApparts();
  });
  const getApparts = () => {
    const newAppartement = logements.find(
      (appart) => appart.id === appartementId
    );
    setAppartement(newAppartement);
  };
  // const listeEquipements = (liste) => {
  //   console.log(liste);
  //   <ul>
  //     {liste.map((equipement) => {
  //       return <li>{equipement}</li>;
  //     })}
  //   </ul>;
  // };
  return (
    <div>
      <Nav />
      <main className="fiche">
        <img
          className="fiche__cover"
          src={appartement.cover}
          alt={appartement.title}
        />
        <div className="fiche__info">
          <div className="fiche__info__title">
            <h1 className="fiche__info__title--h1">{appartement.title}</h1>
            <p className="fiche__info__title--ville">{appartement.location}</p>
          </div>
          <div className="fiche__info__vendeur">
            <p className="fiche__info__vendeur--name">
              {appartement.host && appartement.host.name}
            </p>
            <img
              className="fiche__info__vendeur--photo"
              src={appartement.host && appartement.host.picture}
              alt={appartement.host && appartement.host.name}
            ></img>
          </div>
        </div>
        <div className="fiche__tags">
          <div className="fiche__tags__container">
            {appartement.tags &&
              appartement.tags.map((tag) => (
                <div className="fiche__tags__container--tag" key={tag}>
                  {Tag(tag)}
                </div>
              ))}
          </div>

          <div className="fiche__tags--note">{Rating(appartement.rating)}</div>
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
              appartement.equipments &&
                appartement.equipments.map((equipement) => {
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

//import React from "react";
//import { useEffect } from "react";
//import { useState } from "react";
//import { useParams } from "react-router-dom";
//import Footer from "../components/Footer";
//import Nav from "../components/Nav";
//import logements from "./../logements.json";
//import { Tag } from "../components/Tag";

// const Fiche = () => {
//const { appartementId } = useParams();
// fetch(logements)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
// useEffect(() => {
//   getProducts();
// }, []);
// const getApparts = () => {};
// return (
//   <div>
//     <Nav />
//     <main className="fiche">
//       <img className="fiche__cover" src={Data.cover} alt={Data.title} />
//       <div className="fiche__info">
//         <div className="fiche__info__title">
//           <h1 className="fiche__info__title--h1">{Data.title}</h1>
//           <p className="fiche__info__title--ville">{Data.location}</p>
//         </div>
//         {/* <div className="fiche__info__vendeur">
//           <p className="fiche__info__vendeur--name">{Data.host.name}</p>
//           <img
//             className="fiche__info__vendeur--photo"
//             src={Data.host.picture}
//             alt={Data.host.name}
//           ></img>
//         </div> */}
//       </div>
//       <div className="fiche__tags">
//         {/* <div className="fiche__tags--tag">{Data.tags.map((tag)=>{
//           <Tag (tag) />
//         })}
//         </div> */}
//         {/* <div className="fiche__tags--tag">
//           {Data.tags.map((tag) => Tag(tag))}
//         </div> */}
//         <div className="fiche__tags--note"></div>
//       </div>
//     </main>
//     <Footer />
//   </div>
// );
// };

// export default Fiche;
