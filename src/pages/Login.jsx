import React, { useState } from "react";
import "../pages/Login.css";
import { Link } from "react-router-dom";
import deviconFacebook from "../assets/devicon_facebook.png";
import deviconGoogle from "../assets/devicon_google.png";
import "../pages/Login.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
const Login = () => {
  const [userType, setUserType] = useState("");

  return (
    <div>
      <div className="studentSignup1">
        <h1>Log In</h1>
        <div className="generalstudentform1">
          <div className="tick1">
            <div
              onClick={() => {
                setUserType("student");
              }}
              className="tick"
            >
              {userType === "student" ? <FaCheckCircle /> : <FaRegCircle />}
              <small>Log in as a student</small>
            </div>
            <div
              onClick={() => {
                setUserType("vendor");
              }}
              className="tick"
            >
              {userType === "vendor" ? <FaCheckCircle /> : <FaRegCircle />}
              <small>Log in as a vendor</small>
            </div>
          </div>
          <form className="studentform2" action="">
            <div className="studentform3">
              <div>
                <h4>Username</h4>
                <input
                  className="studentinput3"
                  type="text"
                  placeholder="Your Username"
                  name="your_username"
                />
              </div>
              <div>
                <h4>Password</h4>
                <input
                  className="studentinput3"
                  type="password"
                  placeholder="*******"
                  name="password"
                />
                <Link to="/forgotpassword">
                  <small className="forgotpassword">Forgot Password?</small>
                </Link>
              </div>
            </div>

            <div className="agree">
              <div className="btnss">
                <button className="formbtn1">Log In</button>
                <hr />
                <small>or Sign up with</small>
                <div className="socials">
                  <img src={deviconGoogle} alt="" />
                  <img src={deviconFacebook} alt="" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
