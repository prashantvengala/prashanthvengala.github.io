import React from "react";
import "./Contact.css";
import SocialContact from "../../Common/SocialContact/SocialContact";
import Separator from "../../Common/Separator/Separator";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
          <div className="contact-bottom">
            <a href="https://goo.gl/maps/W3riAc3xMdXskzER8" target="_blank">
              <p>Hyderabad</p>
            </a>
            <a href="mailto:vengalaprashanth24@gmail.com" target="_blank">
              <p>vengalaprashanth24@gmail.com</p>
            </a>
            <a href="tel:+918686262279">
              <p>8686262279</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
