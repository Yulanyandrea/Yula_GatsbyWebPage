import * as React from 'react';
import music from '../../images/musica.png'
import './style.css';

const Header = () => {
  return (
    <nav className="containerHeader">
      <img src={music} alt="" className="containerHeader__musicLogo" />
      <button className="containerHeader__home">Home</button>
      <button className="containerHeader__home">About</button>
      <button className="containerHeader__home">software development</button>
      <button className="containerHeader__home">Sound Design</button>
      <button className="containerHeader__home">Contact</button>

    </nav>

  )
}

export default Header;
