import React from "react";
import "./Footer.css";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="container footer__container">
      <a href="#" className="footer__logo">
        DIKSHYANT
      </a>
      <p>Living , learning and leveling up one day at a time</p>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/dikshyant-dhungana-22b7331a6/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://github.com/dikshyant3"
          target="_blank"
          rel="noreferrer"
        >
          <GrGithub />
        </a>
        <a
          href="https://twitter.com/dikdhungana2"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter />
        </a>
        <a
          href="https://twitter.com/dikdhungana2"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Dikshyant Dhungana.</small>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
