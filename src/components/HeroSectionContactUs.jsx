import React from "react";
import heroSectionImg from "../assets/Hero Section contactus.png";
import "../components/HeroSectionContactUs.css";

const HeroSectionContactUs = () => {
  return (
    <div>
      <div className="mainHero1">
        <img className="heroContactImg" src={heroSectionImg} alt="" />
        <div className="heroContact">
          <h1 className="">Contact Us</h1>
          <p>Get in touch with us</p>
        </div>
      </div>
    </div>
  );
};
export default HeroSectionContactUs;
