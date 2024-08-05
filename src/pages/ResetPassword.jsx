import React from "react";
import "../pages/ResetPassword.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="passReset">
        <h4>A password reset email has been sent to</h4>
        <p>eden@gmail.com</p>
        <div className="resendmail">
          <small>Didn't get the email?</small>
          <Link className="changemail">Click to resend or Change Email</Link>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
