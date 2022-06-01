import React from "react";

import "./Bottomsection.css";
import "../App.css";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

export default function Bottomsection() {
  return (
    <section className="bottom">
      <div className="infodetail">
        <img src={icon1} alt="Declarativelogo"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="infodetail">
        <img src={icon2} height="50" width = "50" alt="ComponentsLogo"/>
        <h3>Components</h3>
        <p>Build encasulated components that manage their state.</p>
      </div>
      <div className="infodetail">
        <img src={icon3} alt="SingleWayLogo"/>
        <h3>Single-Way</h3>
        <p>A set of inmutable values are passed to the component's.</p>
      </div>
      <div className="infodetail">
        <img src={icon4} alt="JSXLogo"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on the modern browser.</p>
      </div>
    </section>
  );
}
