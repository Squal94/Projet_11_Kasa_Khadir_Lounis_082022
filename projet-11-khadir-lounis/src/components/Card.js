import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.url} alt="" />
      <h2 className="card__title">{props.title}</h2>
    </div>
  );
}

export default Card;
