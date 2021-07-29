import React from "react";
import "./Body.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
