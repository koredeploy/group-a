import React from "react";
import studentVector from "../assets/studentvector.png";
import vendorVector from "../assets/vendorvector.png";
import "../pages/StudentVendor.css";
import { Link } from "react-router-dom";

const StudentVendor = () => {
  return (
    <div>
      <div className="allvector">
        <Link to="/signupstudent" className="studentvector">
          <img className="student1" src={studentVector} alt="" />

          <small>Sign Up as student</small>
          <button>Sign Up</button>
        </Link>
        <Link to="/signupvendor" className="vendorvector">
          <img className="vendor1" src={vendorVector} alt="" />
          <small>Sign Up as vendor</small>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default StudentVendor;
