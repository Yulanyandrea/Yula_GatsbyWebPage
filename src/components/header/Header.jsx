import * as React from 'react';
import note from '../../images/note.png';
import music from '../../images/music.png';
import Background from '../background/Background';
// import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <nav className="containerHeader">
      <Background />
      <img src={note} alt="" className="ContainerHeader__note" />
      <img src={music} alt="" className="ContainerHeader__note--two" />
      {/* <Link to="#miSeccion"></Link> */}
      <button className="containerHeader__home">Home</button>
      <button className="containerHeader__home">About</button>
      <button className="containerHeader__home">software development</button>
      <button className="containerHeader__home">Sound Design</button>
      <button className="containerHeader__home">Contact</button>

    </nav>

  )
}

export default Header;
