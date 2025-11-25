import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const About = () => {
  return (
    <main className="sectionTwo" id="about">
      <h1 className="sectionTwo__about">About Me</h1>
      <section className="sectionTwo__paragraph">
        <section>
          <p className="sectionTwo__paragraph--text">
            Hello! I'm Yulany, a passionate Sound Engineer and Full-Stack
            JavaScript Developer. I enjoy transforming ideas into dynamic web
            applications. With a strong belief that music can be seamlessly
            integrated into technology, I focus on creating applications that
            bridge the gap between art and innovation. I specialize in React,
            Gatsby, TypeScript, Express, GraphQL, and MongoDB, and I love
            bringing creative solutions to life through code.
          </p>
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
        </section>
        <img className="sectionTwo__image" src="/images/photo.jpg" alt="" />
      </section>
    </main>
  );
};

export default About;
