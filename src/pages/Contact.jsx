import React from "react";
import "../pages/Contact.css";
import locationImg from "../assets/locationImg.png";
import phoneImg from "../assets/phoneImg.png";
import emailImg from "../assets/mailImg.png";
import mapIcon from "../assets/googlemapIcon.png";
import HeroSectionContactUs from "../components/HeroSectionContactUs";
import googleMap from "../assets/directionlogo.png";

const Contact = () => {
  return (
    <div>
      <div>
        <HeroSectionContactUs />
      </div>

      <div className="mainContact">
        <div className="mainContactInner">
          <div className="locationContact">
            <img src={locationImg} alt="" />
            <div className="locationinner">
              <h4>Our Head Quarters</h4>
              <small className="mapicon">
                Find us on Google Map
                <img src={mapIcon} alt="" />
              </small>
              <p>1 Ogunlesi Street, Off Awoyokun, Onipanu, Lagos.</p>
            </div>
          </div>
          <hr />
          <div className="phoneContact">
            <img src={phoneImg} alt="" />
            <div className="ourphone">
              <h4>Our Phone</h4>
              <small>+234 99999999999</small>
              <small>+234 67897678997</small>
            </div>
          </div>
          <hr />
          <div className="mailContact">
            <img src={emailImg} alt="" />
            <div className="ourphone">
              <h4>Our Email</h4>
              <small>airpeace@gmail.com</small>
              <small>airpeace@gmail.com</small>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="infoContact">
            <h4>Write us directly</h4>
            <span>
              Whether you need information, want to book a reservation, or just
              share your feedback, <p>we're here for you</p>
            </span>
          </div>
          <div className="generalContact">
            <form className="contactform" action="">
              <input type="text" placeholder="Your Name" name="your_name" />
              <input type="text" placeholder="Phone Number" name="your_phone" />
              <input type="email" placeholder="Your Email" name="your_email" />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <img className="map" src={googleMap} alt="" />
    </div>
  );
};

export default Contact;
