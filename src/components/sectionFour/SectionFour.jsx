import * as React from "react";
import Gosht from "../../images/gosht.jpg";
import flowers from "../../images/flowers.jpg";
import dog from "../../images/dog.jpg";
import film from "../../images/film.jpg";

import "./style.css";

const SectionFour = () => {
  const handleVideoGosht = () => {
    window.open("https://www.instagram.com/p/CZ8HBk7FAsm/", "_blank");
  };

  const handelvideoFlowers = () => {
    window.open("https://www.instagram.com/p/Coz471ku8ED/", "_blank");
  };

  const handleVideoDog = () => {
    window.open("https://www.instagram.com/p/CbymkYGl82O/", "_blank");
  };

  const handleVideoFilm = () => {
    window.open("https://vimeo.com/131606667", "_blank");
  };

  return (
    <main className="sectionFour" id="SoundDesign">
      <h1 className="sectionFour__title">Sound Design</h1>
      <section className="sectionFour__projects">
        <section className="sectionFour__projectOne">
          <img src={Gosht} alt="" className="sectionFour__projectOne--img" />
          <p className="sectionFour__projectOne--paragraph">
            Gosht is a video that includes effects to make reference to short
            circuit. Also, includes background music to create a dark atmosphere
            and an underground voice.
          </p>
          <button className="sectionFour__btn" onClick={handleVideoGosht}>
            view video
          </button>
        </section>

        <section className="sectionFour__projectOne">
          <img src={flowers} alt="" className="sectionFour__projectOne--img" />
          <p className="sectionFour__projectOne--paragraph">
            What do you do when your heart is broken? well even if we cannot do
            something perfectly I think music always heal what is broken inside
            of you.{" "}
          </p>
          <button className="sectionFour__btn" onClick={handelvideoFlowers}>
            view video
          </button>
        </section>

        <section className="sectionFour__projectOne">
          <img src={dog} alt="" className="sectionFour__projectOne--img" />
          <p className="sectionFour__projectOne--paragraph">
            It's amazing to be in a comfortable place listening to music and
            doing what you love. that is the purpose of this video there are
            some background audios to recreate a calm environment.
          </p>
          <button className="sectionFour__btn" onClick={handleVideoDog}>
            view video
          </button>
        </section>

        <section className="sectionFour__projectOne">
          <img src={film} alt="" className="sectionFour__projectOne--img" />
          <p className="sectionFour__projectOne--paragraph">
            "Esto tambien pasará" is a film create around 2015 all the process
            was done in Protools and tries to envolve the viewers in a confusing
            situaion.
          </p>
          <button className="sectionFour__btn" onClick={handleVideoFilm}>
            view video
          </button>
        </section>
      </section>
    </main>
  );
};

export default SectionFour;
