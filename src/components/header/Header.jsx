import * as React  from 'react';
import note from '../../images/note.png';
import music from '../../images/music.png';
import Background from '../background/Background';
import { navigate } from 'gatsby';
import './style.css';

const Header = () => {
  const handleHome = () => {
    navigate('#name')
  };

  const handleAbout = () => {
    navigate('#about')
    // sectionTwo
  };

  const handleSoftware = () => {
    navigate('#SoftwareDevelopment')
    //sectionThree
  };

  const handleSound = () => {
    navigate('#SoundDesign')
    //sectionFour
  };

  const handleContact = () => {
    navigate('#ContactMe');
    //sectionFive
  };
  return (
    <nav className="containerHeader">
      <Background />
      <img src={note} alt="" className="ContainerHeader__note" />
      <img src={music} alt="" className="ContainerHeader__note--two" />
      <button className="containerHeader__home" onClick={handleHome}>Home</button>
      <button className="containerHeader__home" onClick={handleAbout}>About</button>
      <button className="containerHeader__home" onClick={handleSoftware}>software development</button>
      <button className="containerHeader__home" onClick={handleSound}>Sound Design</button>
      <button className="containerHeader__home" onClick={handleContact}>Contact</button>

    </nav>

  )
}

export default Header;
