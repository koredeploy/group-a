import React from "react";
import "../signUp/SignUp.css";
import { Link } from "react-router-dom";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const SignUp = () => {
  return (
    <div>
      <div className="studentSignup">
        <h1>Student Sign Up</h1>
        <div className="generalstudentform">
          <form className="studentform" action="">
            <div className="studentform1">
              <div>
                <h4>Full Name</h4>
                <input
                  className="studentinput"
                  type="text"
                  placeholder="Your Name"
                  name="your_name"
                />
              </div>
              <div>
                <h4>Create Username</h4>
                <input
                  className="studentinput"
                  type="text"
                  placeholder="Your Username"
                  name="your_username"
                />
              </div>
              <div>
                <h4>Email</h4>
                <input
                  className="studentinput"
                  type="email"
                  placeholder="totos@gmail.com"
                  name="your_email"
                />
              </div>
              <div>
                <h4>Phone No</h4>
                <input
                  className="studentinput"
                  type="email"
                  placeholder="Your Phone No"
                  name="your_phonenumber"
                />
              </div>
              <div>
                <h4>Create Password</h4>
                <input
                  className="studentinput1"
                  type="password"
                  placeholder="Create Password"
                  name="password"
                />
              </div>
            </div>

            <div className="agree">
              <div className="agreeterms">
                <FaRegSquare />
                <small>I agree to all the terms and privacy policy</small>
              </div>

              <div className="btnss">
                <button className="formbtn">Sign Up</button>
                <small>
                  Already have an account? <Link to="/login">Log in</Link>
                </small>
                <hr />
                <small>or Sign up with</small>
                <div className="socials">
                  <p>google</p>
                  <p>facebook</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
