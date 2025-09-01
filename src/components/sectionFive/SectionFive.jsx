import * as React from "react";
import { useState } from "react";
import { navigate } from "gatsby-link";
import "./style.css";

const SectionFive = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleInputChange = ({ target }) => {
    const key = target.name;
    setFormData({ ...formData, [key]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      classnameName="sectionFive"
      id="ContactMe"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <h1 classnameName="sectionFive__title">Contact Me</h1>
      <p classnameName="sectionFive__info">
        Please fill you information if you want to ask or say something
      </p>
      <section classnameName="sectionFive__message">
        <label htmlFor="myInput" classnameName="sectionFive__message--label">
          Full name
        </label>
        <input
          type="text"
          name="fullname"
          classnameName="sectionFive__fullname"
          onChange={handleInputChange}
        />
        <label htmlFor="myInput" classnameName="sectionFive__message--label">
          Email
        </label>
        <input
          type="email"
          name="email"
          classnameName="sectionFive__fullname"
          onChange={handleInputChange}
        />
        <label htmlFor="myInput" classnameName="sectionFive__message--label">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          classnameName="sectionFive__fullname"
          onChange={handleInputChange}
        />
        <label htmlFor="myInput" classnameName="sectionFive__message--label">
          Your message
        </label>
        <textarea
          type="text"
          name="message"
          classnameName="sectionFive__message--input"
          onChange={handleInputChange}
        />
        <button type="submit" classnameName="sectionFive__btn">
          Send
        </button>
      </section>
    </form>
  );
};

export default SectionFive;
