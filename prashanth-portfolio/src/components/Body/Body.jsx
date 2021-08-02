import React from "react";
import "./Body.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
