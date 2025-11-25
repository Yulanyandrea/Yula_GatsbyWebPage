import * as React from "react";
import Header from "../../components/header/Header";
import Name from "../../components/name/Name";
import "./style.scss";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import { useRef } from "react";

export type SectionRefs = {
  AboutRef: React.RefObject<HTMLElement | null>;
  WorkRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
};

const Home = () => {
  const AboutRef = useRef<HTMLElement | null>(null);
  const WorkRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const refs: SectionRefs = {
    AboutRef,
    WorkRef,
    contactRef,
  };

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    console.log("current", ref.current);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="container">
      <Header scrollToRef={scrollToRef} refs={refs} />
      <Name />

      <section ref={AboutRef} id="about">
        <About />
      </section>
      <section ref={WorkRef} id="SoftwareDevelopment">
        <Work />
      </section>
    </section>
  );
};
export default Home;
