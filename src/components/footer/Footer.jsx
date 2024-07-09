import React, { useState } from "react";
import logo from "../../assets/logo tedible.png";
import facebookLogo from "../../assets/facebook logo.png";
import instaLogo from "../../assets/insta logo.png";
import twitterLogo from "../../assets/twitter logo.png";
import copyrightLogo from "../../assets/copyrightlogo.png";
import emailLogo from "../../assets/email logo.png";
import locationLogo from "../../assets/locationlogo.png";
import contactLogo from "../../assets/contactlogo.png";
import "../footer/Footer.css";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
  
  const Footer = () => {
    const [dropdrown, setDropDown] = useState(false);
    const location = useLocation();
    const routesWithoutFooter = ['/navbarInternal'];
    const isFooterVisible = !routesWithoutFooter.includes(location.pathname);
  
    if (!isFooterVisible) {
      return null;
    }
  return (
    <div className="maincontainermobile">
      <img className="LOGOmobile" src={logo} alt="" />
      <div className="contactmobile">
        <div className="contactdropdown">
          <h4>CONTACT</h4>
          <IoIosArrowDown
            onClick={() => {
              setDropDown(!dropdrown);
            }}
            className="drop"
          />
        </div>
        <div>
          {dropdrown && (
            <div className="contact">
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
                  1 Ogunlesi St, off Awoyokun Street, Onipanu, Lagos 102215,
                  Lagos
                </small>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="quicklinksdropdown">
          <h4>QUICK LINKS</h4>
          <IoIosArrowDown
            onClick={() => {
              setDropDown(!dropdrown);
            }}
            className="drop"
          />
        </div>
        <div>
          {dropdrown && (
            <div className="quicklinks">
              <Link to="/about">
                <small>About Us</small>
              </Link>
              <Link>
                <small>FAQ</small>
              </Link>
              <Link>
                <small>Tedible Prime </small>
              </Link>
              <Link>
                <small>Blog </small>
              </Link>
              <Link to="/contact">
                <small>Contact Us </small>
              </Link>
            </div>
          )}
        </div>
        <hr />
        <Link to="/privacy">
          <h4>PRIVACY POLICY</h4>
        </Link>
        <hr />
        <a className="top" href="/">
          BACK TO TOP
        </a>
        <hr />
      </div>
      <div className="subscribe1">
        <div className="newslettermobile">
          <p>Subscribe to our Newsletter</p>
          <div className="input-group">
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="hr1" />
      <div className="generalmedia">
        <div className="copyrightmobile">
          <img src={copyrightLogo} alt="" />
          <p>2024 TechStudio Tedible</p>
        </div>
        <div className="socialmediamobile">
          <div>
            <img src={facebookLogo} alt="" />
          </div>
          <div>
            <img src={twitterLogo} alt="" />
          </div>
          <div>
            <img src={instaLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
