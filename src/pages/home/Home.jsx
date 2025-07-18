import * as React from "react";
// import Name from "../../components/name/Name";
// import Header from "../../components/header/Header";
// import SectionTwo from "../../components/sectionTwo/SectionTwo";
// import SectionThree from "../../components/sectionThree/SectionThree";
import Background from "../../components/background/Background";
import ImageBackground from "../../components/imageBackground/imageBackground";
// import SectionFour from "../../components/sectionFour/SectionFour";
// import SectionFive from "../../components/sectionFive/SectionFive";
// import Footer from "../../components/footer/Footer";
import "./style.scss";

const Home = () => {
  return (
    <section className="container">
      <Background />
      <ImageBackground />
      {/* <Header />
     

      <Name />
      <Background />

      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer /> */}
    </section>
  );
};
export default Home;
