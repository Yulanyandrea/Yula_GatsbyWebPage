import * as React from "react";
import "./style.scss";

const Cat = () => {
  return (
    <div className="containerCat">
      <div className="face">
        <div className="ear-l"></div>
        <div className="ear-r"></div>
      </div>
      <div className="hand-l"></div>
      <div className="hand-r"></div>
      <div className="leg-l"></div>
      <div className="leg-r"></div>
      <div className="music-note"></div>
    </div>
  );
};

export default Cat;
