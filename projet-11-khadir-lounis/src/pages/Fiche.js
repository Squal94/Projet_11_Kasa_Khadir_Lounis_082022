import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
//import { Tag } from "../components/Tag";

const Fiche = () => {
  const [Data, setData] = useState({});

  useEffect(() => {
    const appartData = window.localStorage.getItem("appartData");
    const data = JSON.parse(appartData);
    console.log(data);
    setData(data);
  }, []);

  return (
    <div>
      <Nav />
      <main className="fiche">
        <img className="fiche__cover" src={Data.cover} alt={Data.title} />
        <div className="fiche__info">
          <div className="fiche__info__title">
            <h1 className="fiche__info__title--h1">{Data.title}</h1>
            <p className="fiche__info__title--ville">{Data.location}</p>
          </div>
          {/* <div className="fiche__info__vendeur">
            <p className="fiche__info__vendeur--name">{Data.host.name}</p>
            <img
              className="fiche__info__vendeur--photo"
              src={Data.host.picture}
              alt={Data.host.name}
            ></img>
          </div> */}
        </div>
        <div className="fiche__tags">
          {/* <div className="fiche__tags--tag">{Data.tags.map((tag)=>{
            <Tag (tag) />
          })}
          </div> */}
          {/* <div className="fiche__tags--tag">
            {Data.tags.map((tag) => Tag(tag))}
          </div> */}
          <div className="fiche__tags--note"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fiche;
