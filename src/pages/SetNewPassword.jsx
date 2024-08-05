import React from "react";
import "../pages/SetNewPassword.css";

const SetNewPassword = () => {
  return (
    <>
      <div className="setnewpass">
        <div>
          <h1>Set New Password</h1>
          <small>Must be at least 8 character</small>
        </div>

        <form action="">
          <div className="newpass">
            <small>New Password</small>
            <input  type="text" />
          </div>
          <div className="confirmpass">
            <small>Confirm Password</small>
            <input type="text" />
          </div>
          <button className="conbtn">Continue</button>
        </form>
      </div>
    </>
  );
};

export default SetNewPassword;
