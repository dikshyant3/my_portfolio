import React from "react";
import "./Header.css";
import CTA from "./CTA";
import profile from "../../images/profile.png";
import HeaderSocials from "./HeaderSocials";
import TypeWriterEffect from "react-typewriter-effect";

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
        <TypeWriterEffect
          textStyle={{
            fontFamily: ["Poppins", "sans-serif"],
            color: "#fc6d6d",
            fontWeight: 600,
            fontSize: "2rem",
            textAlign: "center",
          }}
          startDelay={2000}
          cursorColor="#fc6d6d"
          multiText={["a Designer", "a Web Developer"]}
          multiTextDelay={1000}
          typeSpeed={50}
          multiTextLoop
        />
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
