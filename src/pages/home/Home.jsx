import * as React from "react";

import Header from "../../components/header/Header";
import Name from "../../components/name/Name";
import "./style.scss";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";

const Home = () => {
  console.log("El valor de la variable de entorno es:", process.env.TEST);
  return (
    <section classnameName="container">
      <Header classnameName="buttonsContainer" />
      <Name />
      <SectionTwo />
      <SectionThree />
    </section>
  );
};
export default Home;
