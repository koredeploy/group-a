import React, { useContext } from "react";
import "../signUp/SignUp.css";
import { Link } from "react-router-dom";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import deviconFacebook from "../../assets/devicon_facebook.png";
import deviconGoogle from "../../assets/devicon_google.png";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Spinner from "../../utils/Spinner";

const SignUp = () => {
  const { handleSignUp, isSubmitting } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    handleSignUp(data);
  };
  // const {user} = useContext(AuthContext);

  const btnText = isSubmitting ? <Spinner /> : "Sign Up";
  console.log(btnText);

  return (
    <div>
      <div className="studentSignup">
        <h1>Student Sign Up</h1>

        <div className="generalstudentform">
          <form
            onSubmit={handleSubmit(submit)}
            className="studentform"
            action=""
          >
            <div className="studentform1">
              <div>
                <h4>Full Name</h4>
                <input
                  className="studentinput"
                  type="text"
                  placeholder="Your Name"
                  name="your_name"
                  {...register("name", { required: true })}
                />
                {errors?.username?.type === "required" ? (
                  <small className="text-danger">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Create Username</h4>
                <input
                  className="studentinput"
                  type="text"
                  placeholder="Your Username"
                  name="your_username"
                  {...register("username", { required: true })}
                />
                {errors?.username?.type === "required" ? (
                  <small className="text-white">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Email</h4>
                <input
                  className="studentinput"
                  type="email"
                  placeholder="totos@gmail.com"
                  name="your_email"
                  {...register("email", { required: true })}
                />
                {errors?.email?.type === "required" ? (
                  <small className="text-white">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Phone No</h4>
                <input
                  className="studentinput"
                  type="text"
                  placeholder="Your Phone No"
                  name="your_phonenumber"
                  {...register("phone", { required: true })}
                />
                {errors?.phone?.type === "required" ? (
                  <small className="text-white">This field is required!</small>
                ) : null}
              </div>
              <div>
                <h4>Create Password</h4>
                <input
                  className="studentinput1"
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors?.password?.type === "required" ? (
                  <small className="text-white">This field is required!</small>
                ) : null}
              </div>
            </div>

            <div className="agree">
              <div className="agreeterms">
                <FaRegSquare />
                <small>I agree to all the terms and privacy policy</small>
              </div>

              <div className="btnss">
                <button disabled={isSubmitting} className="formbtn">
                  {btnText}
                </button>
                <small>
                  Already have an account?
                  <Link className="tinylogin" to="/login">
                    Log in
                  </Link>
                </small>
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

export default SignUp;
