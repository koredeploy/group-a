import React from "react";
import "../pages/Contact.css";
import locationImg from "../assets/locationImg.png";
import phoneImg from "../assets/phoneImg.png";
import emailImg from "../assets/mailImg.png";
import mapIcon from "../assets/googlemapIcon.png";
import HeroSectionContactUs from "../components/HeroSectionContactUs";
import googleMap from "../assets/directionlogo.png";
import Map from "../components/Map";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <HeroSectionContactUs />
      </div>
      <div className="infoContact">
        <h1>Write us directly</h1>
        <span>
          Whether you need information, want to book a reservation, or just
          share your feedback, <p>we're here for you</p>
        </span>
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
              <p className="">1 Ogunlesi Street, Off Awoyokun, Onipanu, Lagos.</p>
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
              <small>contact@airpeace.com</small>
              <small>contact@airpeace.com</small>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="generalContact">
            <form
              className="contactform"
              onSubmit={handleSubmit(onSubmit)}
              action=""
            >
              <div>
                <h4>Full Name</h4>
                <input
                  {...register("username", { required: true })}
                  className={`contactform1 ${
                    errors.username ? "border-danger" : ""
                  }`}
                  type="text"
                  placeholder="Your Name"
                  name="username"
                />
                {errors?.username?.type === "required" ? (
                  <small>This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Email</h4>
                <input
                  {...register("email", { required: true })}
                  className={`contactform1 ${
                    errors.email ? "border-danger" : ""
                  }`}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                />
                {errors?.email?.type === "required" ? (
                  <small className="text-warning">
                    This field is required!
                  </small>
                ) : null}
              </div>
              <div>
                <h4>Subject</h4>
                <input
                  {...register("title", { required: true })}
                  className={`contactform1 ${
                    errors.title ? "border-danger" : ""
                  }`}
                  type="text"
                  placeholder="Subject Title"
                  name="title"
                />
                {errors?.title?.type === "required" ? (
                  <small className="text-warning">
                    This field is required!
                  </small>
                ) : null}
              </div>
              <div>
                <h4>Message</h4>
                <textarea
                  {...register("message", { required: true })}
                  className={`p ${errors.message ? "border-danger" : ""}`}
                  name="message"
                  rows="5"
                  placeholder="Type your message here"
                >
                  {errors?.message?.type === "required" ? (
                    <small className="text-warning">
                      This field is required!
                    </small>
                  ) : null}
                </textarea>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
