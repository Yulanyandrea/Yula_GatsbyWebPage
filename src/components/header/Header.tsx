import * as React from "react";
import { SectionRefs } from "../../pages/home/Home";
import "./style.scss";

type HeaderProps = {
  scrollToRef: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: SectionRefs;
};

const Header = ({ scrollToRef, refs }: HeaderProps) => {
  return (
    <nav className="containerHeader">
      <button
        className="containerHeader__home"
        onClick={() => scrollToRef(refs.AboutRef)} //about
      >
        About
      </button>
      <button
        className="containerHeader__home"
        onClick={() => scrollToRef(refs.WorkRef)}
      >
        Software development
      </button>
      {/* <button
        className="containerHeader__home"
        onClick={() => scrollToRef(refs.SectionThreeRef)} //update
      >
        Sound Design
      </button> */}
      <button
        className="containerHeader__home"
        onClick={() => scrollToRef(refs.contactRef)} //update
      >
        Contact
      </button>
    </nav>
  );
};

export default Header;
