import * as React from 'react';
import { Link } from "gatsby"
import './style.css';


const thanks = () => {
  return (
    <main className="thanksSection" id="thanks">
      <h2 className="thanks Section">Thank you 💜 </h2>
      <p className="thanksSection__paragraph">Your mail has been sent. I will be communicating with you
     as soon as I can </p>
      <img src="https://media.giphy.com/media/mS6uPUhffZEYSBBmzx/giphy.gif" width="200" alt=""></img>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default thanks;
