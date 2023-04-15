import * as React from 'react';
import Name from '../../components/name/Name';
import Header from '../../components/header/Header';
import SectionTwo from '../../components/sectionTwo/SectionTwo';
import SectionThree from '../../components/sectionThree/SectionThree';
import Background from '../../components/background/Background';
import SectionFour from '../../components/sectionFour/SectionFour';
import SectionFive from '../../components/sectionFive/SectionFive';
import './style.css';

const Home = () => {
  return (
    <section className="container">
      <Header/>
       <Background />
       <Name />
       <Background />

       <SectionTwo/>
       <SectionThree />
       <SectionFour />
       <SectionFive />

    </section>

  )
}
export default Home
