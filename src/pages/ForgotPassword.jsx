import React from "react";
import "../pages/ForgotPassword.css";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div>
      <div className="forgotpass">
        <h1>Forgot Password?</h1>
        <small>No worries, we will send you reset instructions</small>
        <form className="pass" action="">
          <div className="forgotemail">
            <h4>Email</h4>
            <input
              className="forgotinput"
              type="email"
              placeholder="esther@gmail.com"
              name="your_email"
            />
          </div>
          <button>Reset Password</button>
          <span className="bckarrow">
            <FaArrowLeft />
            <small>Back to previous page</small>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
