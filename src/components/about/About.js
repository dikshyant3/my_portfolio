import React from "react";
import "./About.css";
import ME from "../../images/me.png";

const About = () => {
  const handleClick = () => {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "View less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "View more";
    }
  };
  return (
    <section id="about">
      <h3>Get To Know</h3>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-profile">
            <img src={ME} alt="About__image" />
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
            </div>
            <p>
              An aspiring Frontend developer who loves to create expressive
              websites with attractive designs. Stephen Hawking once said,
              <span id="more">
                "Quiet people have the loudest minds." Do you know what is so
                interesting about it? It totally fits me as I have universe
                inside my mind.
                <br />
                <br />
                An undergrad student currently pursuing my education in Bachelor
                in Computer Engineering in Paschimanchal Campus. Knowledgeable
                Front End Developer successful at creating websites. Proficient
                HTML,CSS,JS and React.js
              </span>
            </p>
            <button
              onClick={handleClick}
              className="btn btn-primary"
              id="myBtn"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
