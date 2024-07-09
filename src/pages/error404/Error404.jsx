import React from "react";
import errorImg from "../../assets/error404Img.png";
import "../error404/Error404.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="errorImg">
        <img src={errorImg} alt="error" />
        <p>Oops! The page you are looking for is not found </p>
        <div className="btnerror">
          <button onClick={()=>{
            navigate(-1)
          }} className="btnError">
            <span className="arrowbtn">
              <FaArrowLeft />
              <small>Back to previous page</small>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
