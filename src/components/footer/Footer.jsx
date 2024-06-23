import React from "react";
import logo from "../../assets/logo tedible.png";
import facebookLogo from "../../assets/facebook logo.png";
import instaLogo from "../../assets/insta logo.png";
import twitterLogo from "../../assets/twitter logo.png";
import copyrightLogo from "../../assets/copyrightlogo.png";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="maincontainermobile">
      <img className="LOGOmobile" src={logo} alt="" />
      <div className="contactmobile">
        <h5>CONTACT</h5>
        <hr />
        <h5>RESOURCES</h5>
        <hr />
        <h5>ABOUT US</h5>
        <hr />
        <a href="#">BACK TO TOP</a>
        <hr />
      </div>
      <div className="subscribe1">
        <div className="newslettermobile">
          <p>Subscribe to our Newsletter</p>
          <div className="input-group">
            <input type="text" placeholder="Email" />
            <button>Subcribe</button>
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
