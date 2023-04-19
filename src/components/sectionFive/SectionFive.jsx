import * as React from 'react';
import './style.css';

const SectionFive = () => {

  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <form className="sectionFive" id="ContactMe" method="POST" data-netlify="true">
       <input type="hidden" name="subject" value="Sales inquiry from yulany-andrea.netlify.app" />
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
          <textarea type="text"  name="message" className="sectionFive__message--input" />
          <button className="sectionFive__btn" onClick={handleSend}>Send</button>

        </section>

    </form>
  )
}

export default SectionFive;
