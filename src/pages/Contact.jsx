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
import useAuth from "../hooks/useAuth";
import Spinner from "../utils/Spinner";

const Contact = () => {
  const {
    isSubmitting,
    setIsSubmitting,
    handleContactForm,
    setToken,
    token,
    setUser,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    handleContactForm(data);
  };

  const btnText = isSubmitting ? <Spinner /> : "Send Message";

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
              <p className="">
                1 Ogunlesi Street, Off Awoyokun, Onipanu, Lagos.
              </p>
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
              onSubmit={handleSubmit(submit)}
              action=""
            >
              <div>
                <h4>Full Name</h4>
                <input
                  {...register("fullName", { required: true })}
                  className={`contactform1 ${
                    errors.fullName ? "border-danger" : ""
                  }`}
                  type="text"
                  placeholder="Your Name"
                />
                {errors?.fullName?.type === "required" ? (
                  <small  class="text-red-700">This field is required!</small>
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
                />
                {errors?.email?.type === "required" ? (
                  <small class="text-red-700">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Subject</h4>
                <input
                  {...register("subject", { required: true })}
                  className={`contactform1 ${
                    errors.subject ? "border-danger" : ""
                  }`}
                  type="text"
                  placeholder="Subject Title"
                />
                {errors?.subject?.type === "required" ? (
                  <small class="text-red-700">
                    This field is required!
                  </small>
                ) : null}
              </div>
              <div>
                <h4>Message</h4>
                <textarea
                  {...register("message", { required: true })}
                  className={`p ${errors.message ? "border-danger" : ""}`}
                  rows="5"
                  placeholder="Type your message here"
                />
                {errors?.message?.type === "required" && (
                  <small  class="text-red-700">
                    This field is required!
                  </small>
                )}
              </div>
              <button disabled={isSubmitting}>{btnText}</button>
            </form>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
