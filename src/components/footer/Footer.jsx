import * as React from "react";
import note from "../../images/note.png";
import "./style.css";

const Footer = () => {
  return (
    <main className="footer">
      <h4 className="footer__text">Copyright © 2023</h4>
      <img src={note} alt="" className="footer__img" />
    </main>
  );
};

export default Footer;
