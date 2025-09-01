import * as React from "react";
import nft from "../../images/nuron.jpg";
import jyk from "../../images/jyk.png";
import amasa from "../../images/amasa.png";
import "./style.scss";

const SectionThree = () => {
  // const handleClickNft = () => {
  //   window.open(
  //     "https://marketplacenft-8qfmf4bxy-yulanyandrea.vercel.app/",
  //     "_blank"
  //   );
  // };

  // const handleClickJyk = () => {
  //   window.open("https://jy-ksports-front-end.vercel.app/", "_blank");
  // };

  // const handleClickAmasa = () => {
  //   window.open(
  //     "https://amasa-milhojeria-frontend-part-b.vercel.app/",
  //     "blank"
  //   );
  // };

  return (
    <main classnameName="containerSectionThree" id="SoftwareDevelopment">
      {/* <p classnameName="containerSectionThree__paragraph">Here you will my work</p>
      <section classnameName="containerSectionThree__work">
        <section classnameName="containerSectionThree__work--nft">
          <img src={nft} alt="" classnameName="containerSeectionThree__work--img" />
          <p classnameName="containerSectionThree__work--nftText">
            Nuron is a web application to create and sell NFT around the world.
            People can create works of art and sell them at virtual auction or
            direct payment.
          </p>
          <a
            href="https://marketplacenft-8qfmf4bxy-yulanyandrea.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <button type="submit" classnameName="containerSectionThree__work--button">
            Web site
          </button>
        </section> */}

      {/* <section classnameName="containerSectionThree__work--nft">
          <img
            src={jyk}
            alt=""
            classnameName="containerSeectionThree__work--image"
          />
          <p classnameName="containerSectionThree__work--nftText">
            JyK Sports is a shoes store located in Bogotá Colombia . The app
            organize all products from China by reference, color, and size.
            Also, generate a QR code to identify all products.
          </p>
          <button
            type="submit"
            classnameName="containerSectionThree__work--button"
            onClick={handleClickJyk}
          >
            Web site
          </button>
        </section>

        <section classnameName="containerSectionThree__work--nft">
          <img
            src={amasa}
            alt=""
            classnameName="containerSeectionThree__work--image"
          />
          <p classnameName="containerSectionThree__work--nftText">
            Amasa milhojeria is a store located in Medellín Colombia to order a
            dessert called Milhojas. This project will provide an eassy way to
            customers to take their order.
          </p>
          <button
            type="submit"
            classnameName="containerSectionThree__work--button"
            onClick={handleClickAmasa}
          >
            Web site
          </button>
        </section> 
      </section>*/}
    </main>
  );
};

export default SectionThree;
