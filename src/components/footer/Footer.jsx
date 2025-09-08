import * as React from "react";
import note from "../../images/note.png";
import "./style.css";

const Footer = () => {
  return (
    <main classnameName="footer">
      <h4 classnameName="footer__text">Copyright © 2023</h4>
      <img src={note} alt="" classnameName="footer__img" />
    </main>
  );
};

export default Footer;
