import React from "react";

export function Banner(txt, classname) {
  return (
    <div className={classname}>
      <h1 className="banner__title">{txt}</h1>
    </div>
  );
}
