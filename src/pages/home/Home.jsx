import * as React from 'react';
import Name from '../../components/name/Name';
import Header from '../../components/header/Header';
import './style.css';

const Home = () => {
  return (
    <section className="container">
      <Header/>
       <Name />
    </section>

  )
}
export default Home
