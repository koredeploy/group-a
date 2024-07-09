import React, { useState } from "react";
import "../pages/Login.css";
import { Link } from "react-router-dom";
import deviconFacebook from "../assets/devicon_facebook.png";
import deviconGoogle from "../assets/devicon_google.png";
import "../pages/Login.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from "../utils/Spinner";
import handleAuthError from "../utils/handleAuthError";
const Login = () => {
  const { isSubmitting, setIsSubmitting, handleLogIn,  setToken, token, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  

  const submit = (data) => {
    handleLogIn(data);
    // console.log(data);
  };

  const [userType, setUserType] = useState("");
  const btnText = isSubmitting ? <Spinner /> : "Log In";

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
          <form
            onSubmit={handleSubmit(submit)}
            className="studentform2"
            action=""
          >
            <div className="studentform3">
              <div>
                <h4>Username</h4>
                <input
                  {...register("username", { required: true })}
                  className={`studentinput3 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Your Username"
                  name="username"
                />
                {errors?.username?.type === "required" ? (
                  <small className="text-white">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Password</h4>
                <input
                  {...register("password", { required: true })}
                  className={`studentinput3 ${
                    errors.password ? "border-danger" : ""
                  }`}
                  type="password"
                  placeholder="*******"
                  name="password"
                />
                {errors?.password?.type === "required" ? (
                  <small className="text-danger">This field is required!</small>
                ) : null}
                <Link to="/forgotpassword">
                  <small className="forgotpassword">Forgot Password?</small>
                </Link>
              </div>
            </div>

            <div className="agree">
              <div className="btnss">
                <button disabled={isSubmitting} className="formbtn1">
                  {btnText}
                </button>
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
