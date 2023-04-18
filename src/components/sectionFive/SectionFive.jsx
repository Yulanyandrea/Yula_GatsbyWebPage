import * as React from 'react';
import './style.css';

const SectionFive = () => {
  return (
    <main className="sectionFive" id="ContactMe">
      <h1 className="sectionFive__title">Contact Me</h1>
      <p className="sectionFive__info">Please fill you information if you want to ask or say something</p>
      <section className="sectionFive__message">
        <label htmlFor="myInput" className="sectionFive__message--label">Full name</label>
        <input type="text" className="sectionFive__fullname" />
        <label htmlFor="myInput" className="sectionFive__message--label">Email</label>
        <input type="email" className="sectionFive__fullname" />
        <label htmlFor="myInput" className="sectionFive__message--label">Subject</label>
        <input type="text" className="sectionFive__fullname" />
        <label htmlFor="myInput" className="sectionFive__message--label">Your message</label>
        <textarea type="text"  className="sectionFive__message--input" />
        <button className="sectionFive__btn">Send</button>

      </section>

    </main>
  )
}

export default SectionFive;
