import * as React from 'react';
import { useState } from 'react';
import { navigate } from 'gatsby';
import './style.css';

const SectionFive = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };


  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  return (
    <form name="contact" className="sectionFive" id="ContactMe" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <h1 className="sectionFive__title">Contact Me</h1>
        <p className="sectionFive__info">Please fill you information if you want to ask or say something</p>
        <section className="sectionFive__message">
          <label htmlFor="myInput" className="sectionFive__message--label" >Full name</label>
          <input type="text" name="fullname" className="sectionFive__fullname"  onChange={handleInputChange} />
          <label htmlFor="myInput" className="sectionFive__message--label">Email</label>
          <input type="email" name="email" className="sectionFive__fullname" onChange={handleInputChange}/>
          <label htmlFor="myInput" className="sectionFive__message--label">Subject</label>
          <input type="text" name="subject"  className="sectionFive__fullname" onChange={handleInputChange}/>
          <label htmlFor="myInput" className="sectionFive__message--label">Your message</label>
          <textarea type="text"  name="message" className="sectionFive__message--input" onChange={handleInputChange}/>
          <button type="submit" className="sectionFive__btn">Send</button>

        </section>

    </form>
  )
}

export default SectionFive;
