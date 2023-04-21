import * as React from 'react';
import './style.css';

const SectionFive = () => {


  return (
    <form name="contact"
        className="sectionFive"
        id="ContactMe"
        method="POST"
        data-netlify="true"
        onSubmit="submit">
          <input type="hidden" name="contact" value="contact" />

        <h1 className="sectionFive__title">Contact Me</h1>
        <p className="sectionFive__info">Please fill you information if you want to ask or say something</p>
        <section className="sectionFive__message">
          <label htmlFor="myInput" className="sectionFive__message--label" >Full name</label>
          <input type="text" name="fullname" className="sectionFive__fullname"   />
          <label htmlFor="myInput" className="sectionFive__message--label">Email</label>
          <input type="email" name="email" className="sectionFive__fullname" />
          <label htmlFor="myInput" className="sectionFive__message--label">Subject</label>
          <input type="text" name="subject"  className="sectionFive__fullname" />
          <label htmlFor="myInput" className="sectionFive__message--label">Your message</label>
          <textarea type="text"  name="message" className="sectionFive__message--input" />
          <button type="submit" className="sectionFive__btn">Send</button>

        </section>

    </form>
  )
}

export default SectionFive;
