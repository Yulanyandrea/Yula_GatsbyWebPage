import * as React from 'react';
import nft from '../../images/nft.jpg'
import jyk from '../../images/jyk.jpg'
import amasa from '../../images/amasa.png'
import './style.css';

const SectionThree = () => {
  return (
    <main className="containerSectionThree">
      <h2 className="containerSectionThree__title">Software development</h2>
      <p className="containerSectionThree__paragraph">Here you will find some of my work</p>
      <section className="containerSectionThree__work">
        <section className="containerSectionThree__work--nft">
          <img src={nft} alt="" className="containerSeectionThree__work--image" />
          <p className="containerSectionThree__work--nftText">Nuron is a web application to create
          and sell NFT around the world. People can create works of art and sell them at virtual auction</p>
          <button type ="submit" className="containerSectionThree__work--button">Web site</button>
        </section>


        <section className="containerSectionThree__work--nft">
          <img src={jyk} alt="" className="containerSeectionThree__work--image" />
          <p className="containerSectionThree__work--nftText">JyK Sports is a shoes store located
          in Bogotá Colombia . The app organize all products from China by reference, color, and size. Also,
          generate a QR code to identify all products.</p>
          <button type ="submit" className="containerSectionThree__work--button">Web site</button>
        </section>

        <section className="containerSectionThree__work--nft">
          <img src={amasa} alt="" className="containerSeectionThree__work--image" />
          <p className="containerSectionThree__work--nftText">Amasa milhojeria is a store located in Medellín Colombia to order a dessert called Milhojas.
          This project will provide an eassy way to customers to take their order</p>
          <button type ="submit" className="containerSectionThree__work--button">Web site</button>
        </section>



      </section>


    </main>
  )
}

export default SectionThree;
