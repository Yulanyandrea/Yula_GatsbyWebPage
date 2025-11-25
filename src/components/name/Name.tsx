import * as React from "react";
import Cat from "../cat/Cat";
import "./style.scss";

const Name = () => {
  return (
    <main className="ContainerName" id="name">
      <section>
        <h1 className="containerName___elements">
          Where creativity meets code
        </h1>
        <h4 className="containerName___elements-sub">
          believe in the power of technology to bring ideas to life
        </h4>
        <Cat />
      </section>
    </main>
  );
};

export default Name;
