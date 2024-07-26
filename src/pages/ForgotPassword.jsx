import { useState } from "react";
import "../pages/ForgotPassword.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import Spinner from "../utils/Spinner";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmitForm = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    try {
      const { response } = await axiosInstance.post(
        "/api/auth/forgot-password",
        data
      );
      console.log(response);
      // navigate to the page
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const btnText = isSubmitting ? <Spinner /> : "Reset Password";

  return (
    <div>
      <div className="forgotpass">
        <h1>Forgot Password?</h1>
        <small>No worries, we will send you reset instructions</small>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="pass"
          action=""
        >
          <div className="forgotemail">
            <small>Enter your Email</small>
            <input
              className="forgotinput px-2"
              type="email"
              placeholder="esther@gmail.com"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <span className="text-red-500">This field is required!</span>
            )}
          </div>
          <button className="resetbtn px-2 py-1">{btnText}</button>
          <Link to="/login">
            <span className="bckarrow">
              <FaArrowLeft />
              <small>Back to Login</small>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
