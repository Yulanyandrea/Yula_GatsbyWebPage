import * as React from 'react';
import note from '../../images/note.png';
import music from '../../images/music.png'
import './style.css';

const Header = () => {
  return (
    <nav className="containerHeader">
      <img src={note} alt="" className="ContainerHeader__note" />
      <img src={music} alt="" className="ContainerHeader__note--two" />
      <button className="containerHeader__home">Home</button>
      <button className="containerHeader__home">About</button>
      <button className="containerHeader__home">software development</button>
      <button className="containerHeader__home">Sound Design</button>
      <button className="containerHeader__home">Contact</button>

    </nav>

  )
}

export default Header;
