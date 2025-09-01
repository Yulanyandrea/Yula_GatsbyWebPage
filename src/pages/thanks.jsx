import * as React from "react";
import { Link } from "gatsby";
import "./style.css";

const thanks = () => {
  return (
    <main classnameName="thanksSection" id="thanks">
      <h2 classnameName="thanks Section">Thank you 💜 </h2>
      <p classnameName="thanksSection__paragraph">
        Your mail has been sent. I will be communicating with you as soon as I
        can{" "}
      </p>
      <img
        src="https://media.giphy.com/media/mS6uPUhffZEYSBBmzx/giphy.gif"
        width="200"
        alt=""
      ></img>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default thanks;
