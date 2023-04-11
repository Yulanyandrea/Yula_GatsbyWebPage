import * as React from 'react';
import Name from '../../components/name/Name';
import Header from '../../components/header/Header';
import SectionTwo from '../../components/sectionTwo/SectionTwo';
import './style.css';

const Home = () => {
  return (
    <section className="container">
      <Header/>
       <Name />
       <SectionTwo/>

    </section>

  )
}
export default Home
