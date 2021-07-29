import React from "react";
import SocialContact from "../../Common/SocialContact/SocialContact";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Prashanth Vengala</span>.<br />
          <p>
            Full Stack Web Developer driven to execute goal-oriented projects.
            Passionate about coding & experienced in working with teams. Looking
            forward to creating responsive, fast, and interactive web sites for
            great user experience.
          </p>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/Prashanth_pic.jpeg").default}
            className="picture"
          />
        </div>
      </div>
      <div>
        <div className="download">
          <a
            download
            href={require("../../../assets/icons/resume.pdf").default}
          >
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
