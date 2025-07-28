import * as React from "react";
import note from "../../images/note.png";
import music from "../../images/music.png";
import "./style.scss";

const Header = () => {
  const handleHome = () => {
    scrollToSection("#name");
  };

  const handleAbout = () => {
    scrollToSection("#about");
    // sectionTwo
  };

  const handleSoftware = () => {
    scrollToSection("#SoftwareDevelopment");
    //sectionThree
  };

  const handleSound = () => {
    scrollToSection("#SoundDesign");
    //sectionFour
  };

  const handleContact = () => {
    scrollToSection("#ContactMe");
    //sectionFive
  };

  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="containerHeader">
      <button className="containerHeader__home" onClick={handleHome}>
        Home
      </button>
      <button className="containerHeader__home" onClick={handleAbout}>
        About
      </button>
      <button className="containerHeader__home" onClick={handleSoftware}>
        software development
      </button>
      <button className="containerHeader__home" onClick={handleSound}>
        Sound Design
      </button>
      <button className="containerHeader__home" onClick={handleContact}>
        Contact
      </button>
    </nav>
  );
};

export default Header;
