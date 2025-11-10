import * as React from "react";
import Cat from "../cat/Cat";
import "./style.scss";

const Name = () => {
  return (
    <main className="ContainerName" id="name">
      <section>
        <h1 className="containerName___elements">Hi my name is Yulany</h1>
        <Cat />
      </section>
    </main>
  );
};

export default Name;
