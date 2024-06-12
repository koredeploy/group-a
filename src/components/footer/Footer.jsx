import React from "react";
import logo from "../../assets/logo tedible.png";
import emailLogo from "../../assets/email logo.png";
import locationLogo from "../../assets/locationlogo.png";
import contactLogo from "../../assets/contactlogo.png";
import facebookLogo from "../../assets/facebook logo.png";
import instaLogo from "../../assets/insta logo.png";
import twitterLogo from "../../assets/twitter logo.png";
import copyrightLogo from "../../assets/copyrightlogo.png";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="maincontainer">
      <img className="LOGO" src={logo} alt="" />
      <div className="innercontainer">
        <div className="contact">
          <h4 className="High4">Contact</h4>
          <div className="contact-info">
            <img src={emailLogo} alt="" />
            <small>hello@tedible.com</small>
          </div>
          <div className="contact-info">
            <img src={contactLogo} alt="" />
            <small>+234 813 383 8283</small>
          </div>
          <div className="contact-info">
            <img src={locationLogo} alt="" />
            <small>
              1 Ogunlesi St, off Awoyokun Street, Onipanu, Lagos 102215, Lagos
            </small>
          </div>
        </div>
          <h5 className="high5">CONTACT</h5>
        <div className="quicklinks">
          <h4>Quick Links</h4>
          <small>About Us</small>
          <small>FAQ</small>
          <small>Tedible Prime </small>
          <small>Blog </small>
          <small>Contact Us </small>
        </div>

        <div className="followUs">
          <h4>Follow Us</h4>
          <div className="socialmedia">
            <img src={facebookLogo} alt="" />
            <small>Facebook</small>
          </div>
          <div className="socialmedia">
            <img src={twitterLogo} alt="" />
            <small>Twitter</small>
          </div>
          <div className="socialmedia">
            <img src={instaLogo} alt="" />
            <small>Instagram </small>
          </div>
        </div>

        <div className="resources">
          <h4>Resources</h4>
          <small>Blog</small>
          <small>News Update</small>
        </div>
        <div className="terms">
          <small>Terms & Conditions</small>
          <small>Privacy Policy</small>
          <small>Cookies Policy </small>
          <small>Compliance </small>
        </div>
      </div>
      <div className="subscribe">
        <div className="newsletter">
          <p>Subscribe to our Newsletter</p>
          <input type="text" placeholder="Email" />
        </div>
        <div className="copyright">
          <img src={copyrightLogo} alt="" />
          <small>2024 Copyright techstudio tedible</small>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;