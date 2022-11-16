import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dikshyantdhungana@gmail.com</h5>
            <a
              href="mailto:dikshyantdhungana@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Dikshyant Dhungana</h5>
            <a
              href="https://www.linkedin.com/in/dikshyant-dhungana-22b7331a6/"
              target="_blank"
              rel="noreferrer"
            >
              Let's Connect
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>Dikshyant Dhungana</h5>
            <a
              href="https://twitter.com/dikdhungana2"
              target="_blank"
              rel="noreferrer"
            >
              Let's Build a community
            </a>
          </article>
          <form action="">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="Email" placeholder="Email" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
