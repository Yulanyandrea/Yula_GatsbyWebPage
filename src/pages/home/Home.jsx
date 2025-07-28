import * as React from "react";

import Header from "../../components/header/Header";
import Background from "../../components/background/Background";
import Name from "../../components/name/Name";
import "./style.scss";

const Home = () => {
  return (
    <section className="container">
      <Header className="buttonsContainer" />
      <Background />
      <Name />
    </section>
  );
};
export default Home;
