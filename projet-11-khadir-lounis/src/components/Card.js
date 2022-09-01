import React from "react";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img className="card--img" src={props.cover} alt="" />
      <h2 className="card__title">{props.title}</h2>
    </div>
  );
}

export default Card;

// import React from "react";

// const Card = (url, title) => {
//   return (
//     <div className="card">
//       <img src={url} alt="" />
//       <h2 className="card__title">{title}</h2>
//     </div>
//   );
// };

// export default Card;
