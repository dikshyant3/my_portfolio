import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="nav container">
        <a href="/my_portfolio/public/index.html" className="nav_logo">
          DIKSHYANT
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
              </a>
              Home
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
              </a>
              About
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
              </a>
              Skills
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
              </a>
              Portfolio
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
              </a>
              Contact
            </li>
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
      {/* <h1>Header component</h1> */}
    </div>
  );
}

export default Header;
