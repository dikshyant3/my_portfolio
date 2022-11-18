import React from "react";
import "./Header.css";
import CTA from "./CTA";
import profile from "../../images/profile.png";
import HeaderSocials from "./HeaderSocials";
// import TypeWriterEffect from "react-typewriter-effect";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <h3>
          Hello, I'm
          <br />
          Dikshyant Dhungana
        </h3>
        <div className="typewriter">
          <div className="first">a Designer</div>
          <div className="first">a Web Developer</div>
        </div>

        <CTA />
        <HeaderSocials />

        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down &#8594;
        </a>
      </div>
    </section>
  );
};

export default Header;
