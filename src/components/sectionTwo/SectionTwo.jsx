import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const SectionTwo = () => {
  return (
    <main className="sectionTwo" id="about">
      <h1 className="sectionTwo__about">About Me</h1>
      <section className="sectionTwo__paragraph">
        <p className="sectionTwo__paragraph--text">
          Hellooooo! I'm Yulany and I'm a sound engineer and fullstack
          Javascript software developer. I love turning ideas into web
          applications. Besides, I think that music can be turned into great
          applications to converge art and technology. Usually, I develop in
          React, Gatsby, Typescript Express, GraphQl, and Mongo DB.
        </p>
        {/* <img src={yula} alt="" classnameName="sectionTwo__profilePicture" /> */}
        <section className="sectionTwo__socialMedia">
          <a
            href="https://www.linkedin.com/in/yulanymunevar/"
            target="_blank"
            rel="noopener noreferrer"
            className="sectionTwo__socialMedia--link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="sectionTwo__socialMedia--icon"
            />
          </a>

          <a
            href="https://github.com/Yulanyandrea"
            target="_blank"
            rel="noopener noreferrer"
            className="sectionTwo__socialMedia--link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="sectionTwo__socialMedia--icon"
            />
          </a>
        </section>
        <h2 className="sectionTwo__title">Software development</h2>
      </section>
    </main>
  );
};

export default SectionTwo;
