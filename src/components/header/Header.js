import React from "react";
import "./Header.css";
import CTA from "./CTA";
import profile from "../../images/profile.png";
import HeaderSocials from "./HeaderSocials";

// Note animation chalexaina hai aaile
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>
          Hello, I'm
          <br />
          Dikshyant Dhungana
        </h3>
        <ul className="dynamic-texts">
          <li>
            <span>a Designer</span>
          </li>
          <li>
            <span>a Web Developer</span>
          </li>
        </ul>
        <CTA />
        <HeaderSocials />

        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down &#8594;
        </a>
      </div>
    </header>
  );
};

export default Header;
