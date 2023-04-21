import * as React from 'react';
import { useState } from 'react';
import './style.css';

const SectionFive = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: data,
    })
      .then(() => alert('Gracias por tu mensaje!'))
      .catch((error) => alert(error));
  };

  return (
    <form name="contact"
        className="sectionFive"
        id="ContactMe"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}>

        <h1 className="sectionFive__title">Contact Me</h1>
        <p className="sectionFive__info">Please fill you information if you want to ask or say something</p>
        <section className="sectionFive__message">
          <label htmlFor="myInput" className="sectionFive__message--label" >Full name</label>
          <input type="text" name="fullname" className="sectionFive__fullname"  onChange={handleInputChange}  />
          <label htmlFor="myInput" className="sectionFive__message--label">Email</label>
          <input type="email" name="email" className="sectionFive__fullname" onChange={handleInputChange}  />
          <label htmlFor="myInput" className="sectionFive__message--label">Subject</label>
          <input type="text" name="subject"  className="sectionFive__fullname" onChange={handleInputChange}  />
          <label htmlFor="myInput" className="sectionFive__message--label">Your message</label>
          <textarea type="text"  name="message" className="sectionFive__message--input" onChange={handleInputChange}  />
          <button type="submit" className="sectionFive__btn">Send</button>

        </section>

    </form>
  )
}

export default SectionFive;
