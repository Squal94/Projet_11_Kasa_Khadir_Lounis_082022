import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
      <h1>{Data.id}</h1>
    </div>
  );
};

export default Fiche;
