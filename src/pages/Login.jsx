import React, { useState } from "react";
import "../pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import deviconFacebook from "../assets/devicon_facebook.png";
import deviconGoogle from "../assets/devicon_google.png";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from "../utils/Spinner";
import handleAuthError from "../utils/handleAuthError";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";

const Login = () => {
  const navigate = useNavigate();
  const { isSubmitting, handleLogIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (data) => {
    try {
      await handleLogIn(data);
      navigate("/internal/dashboard");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const btnText = isSubmitting ? <Spinner /> : "Log In";

  return (
    <div>
      <div className="studentSignup1">
        <h1>Log In</h1>
        <div className="generalstudentform1">
          <div className="tick1">
            <div onClick={() => setUserType("student")} className="tick">
              {userType === "student" ? <FaCheckCircle /> : <FaRegCircle />}
              <small>Log in as a student</small>
            </div>
            <div onClick={() => setUserType("vendor")} className="tick">
              {userType === "vendor" ? <FaCheckCircle /> : <FaRegCircle />}
              <small>Log in as a vendor</small>
            </div>
          </div>
          <form onSubmit={handleSubmit(submit)} className="studentform2" action="">
            <div className="studentform3">
              <div>
                <h4>Username</h4>
                <input
                  {...register("username", { required: true })}
                  className={`studentinput3 ${errors.username ? "" : ""}`}
                  type="text"
                  placeholder="Your Username"
                  name="username"
                />
                {errors?.username?.type === "required" ? (
                  <small>This field is required!</small>
                ) : null}
              </div>
              <div className="password-container">
                <h4>Password</h4>
                <div className="password-input">
                  <input
                    {...register("password", { required: true })}
                    className={`studentinput3 ${errors.password ? "" : ""}`}
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                    name="password"
                  />
                  <button
                    type="button"
                    onClick={handlePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
                  </button>
                </div>
                {errors?.password?.type === "required" ? (
                  <small>This field is required!</small>
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
                <small>
                `Don&apos;t an account?{" "}`
                  <Link className="text-orange-500" to="/signupstudent">
                    Sign Up
                  </Link>
                </small>
                <hr />
                <small>or Login with</small>
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
