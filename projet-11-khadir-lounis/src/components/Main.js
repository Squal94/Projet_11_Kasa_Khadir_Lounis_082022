import React from "react";
//import { card } from "./Card";
import logements from "../logements.json";
import Card from "./Card";
import { NavLink } from "react-router-dom";
// import { Data } from "./Data";

const Main = () => {
  return (
    <main className="main">
      {logements.map((logement) => {
        return (
          <NavLink id={logement.id} to={logement.cover} key={logement.id}>
            {Card(logement)}
          </NavLink>
        );
      })}
    </main>
  );
};

export default Main;
// import React from "react";
// //import { card } from "./Card";
// import logements from "../logements.json";
// // import { Data } from "./Data";

// const Main = () => {
//   return (
//     <main className="main">
//       {logements.map((logement) => {
//         return (
//           <a href={logement.cover} className="card" key={logement.id}>
//             <img
//               className="card--img"
//               src={logement.cover}
//               alt={logement.title}
//             />
//             <h2 className="card__title">{logement.title}</h2>
//           </a>
//         );
//       })}
//     </main>
//   );
// };

// export default Main;
