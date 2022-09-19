import React from "react";

export const Tag = (props) => {
  return (
    <div className="tag">
      <p className="tag__name">{props.tag}</p>
    </div>
  );
};
