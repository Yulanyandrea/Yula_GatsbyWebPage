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
          "If what’s coming unsettles you, don’t let the world wait for your
          desire; your freedom was a longing yesterday—today go out and hunt
          what you want. In your arrows fear dies, cowards flee, unwilling;
          don't fall, tamed by anyone, keep watch over your moon in the sky.
          Don’t miss the sun for being a traveler—its fragility does not hide;
          dance, breathe, in your forest… run, chase your dreams! If I wait for
          you every night, let the world pursue your life, for its message is
          not forgotten; you can —even when you doubt—" Valeria Dos Santos
        </h4>
        <Cat />
      </section>
    </main>
  );
};

export default Name;
