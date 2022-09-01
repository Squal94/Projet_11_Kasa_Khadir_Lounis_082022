import React from "react";
import { useState } from "react";

export function Collapse(props) {
  const [setActive, setActiveState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState("collapse__container__img");

  function Rotate() {
    setActiveState(setActive === "" ? "active" : "");
    setIsOpen(setActive === "active" ? false : true);
    setIsRotate(
      setActive === "active"
        ? "collapse__container__img"
        : "collapse__container__img rotate"
    );
  }

  return (
    <div className="collapse" id={props.id}>
      <div className="collapse__container">
        <button className="collapse__container__btn" onClick={() => Rotate()}>
          {props.title}
        </button>
        <img className={isRotate} src="./down-arrow.png" alt="Arrow" />
      </div>
      {isOpen && <div className="collapse__content">{props.description}</div>}
    </div>
  );
}

// import React from "react";
// import { useState } from "react";

// export function Collapse(props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isRotate, setIsRotate] = useState("collapse__container__img");

//   function Rotate() {
//     setIsOpen(!isOpen);
//     setIsRotate(
//       setIsOpen === !isOpen
//         ? "collapse__container__img"
//         : "collapse__container__img rotate"
//     );
//   }

//   return (
//     <div className="collapse" id={props.id}>
//       <div className="collapse__container">
//         <button className="collapse__container__btn" onClick={() => Rotate()}>
//           {props.title}
//         </button>
//         <img className={isRotate} src="./down-arrow.png" alt="Arrow" />
//       </div>
//       {isOpen && <div className="collapse__content">{props.description}</div>}
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";

// const Collapse = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="collapse" id={props.id}>
//       <button className="collapse__btn" onClick={() => setIsOpen(!isOpen)}>
//         {props.title}
//       </button>
//       {isOpen && <div className="collapse__content">{props.description}</div>}
//     </div>
//   );
// };

// export default Collapse;
