import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const SectionTwo = () => {
  return (
    <main classnameName="sectionTwo" id="about">
      <h1 classnameName="sectionTwo__about">About Me</h1>
      <section classnameName="sectionTwo__paragraph">
        <p classnameName="sectionTwo__paragraph--text">
          Hellooooo! I'm Yulany and I'm a sound engineer and fullstack
          Javascript software developer. I love turning ideas into web
          applications. Besides, I think that music can be turned into great
          applications to converge art and technology. Usually, I develop in
          React, Gatsby, Typescript Express, GraphQl, and Mongo DB.
        </p>
        {/* <img src={yula} alt="" classnameName="sectionTwo__profilePicture" /> */}
        <section classnameName="sectionTwo__socialMedia">
          <a
            href="https://www.linkedin.com/in/yulanymunevar/"
            target="_blank"
            rel="noopener noreferrer"
            classnameName="sectionTwo__socialMedia--link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              classnameName="sectionTwo__socialMedia--icon"
            />
          </a>

          <a
            href="https://github.com/Yulanyandrea"
            target="_blank"
            rel="noopener noreferrer"
            classnameName="sectionTwo__socialMedia--link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              classnameName="sectionTwo__socialMedia--icon"
            />
          </a>
        </section>
        <h2 classnameName="sectionTwo__title">Software development</h2>
      </section>
    </main>
  );
};

export default SectionTwo;
