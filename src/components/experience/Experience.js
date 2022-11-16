import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="skill-bar">
              <div className="info">
                <p>HTML</p>
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>CSS3</p>
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Javascript</p>
              </div>
              <div className="bar">
                <span className="js"></span>
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Tailwind CSS</p>
              </div>
              <div className="bar">
                <span className="tailwind"></span>
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>React</p>
              </div>
              <div className="bar">
                <span className="react"></span>
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Github</p>
              </div>
              <div className="bar">
                <span className="github"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
