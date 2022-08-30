import React from "react";

const Card = (url, title) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
