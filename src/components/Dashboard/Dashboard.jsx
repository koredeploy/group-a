import React, { useState, useEffect } from "react";
import banner from "../../assets/banner.svg";
import banner2 from "../../assets/banner2.svg";
import banner3 from "../../assets/banner3.svg";
import banner4 from "../../assets/banner4.svg";
import ice from "../../assets/ice.svg";
import arrowside from "../../assets/arrowside.svg";
// import MenuCard from '../menu/MenuCard';
import Cart from "../Cart/Cart";

const Dashboard = () => {
  const banners = [banner2, banner, banner3, banner4, ice]; // Add more banners if needed
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className="w-full text-[#073126] flex">
      <div className="sm:pl-[18rem] px-5 sm:px-[2rem] w-full sm:py-[7rem] pt-[11rem] py-[2rem]">
        <div className="sm:relative">
          <img
            src={banners[currentBannerIndex]}
            alt="Banner"
            className="sm:w-full sm:h-auto transition-opacity duration-1000"
          />
          {/* {currentBannerIndex !== 0 && ( // Only display the button if the current banner is not banner2
            <button className="absolute bottom-10 border sm:w-40 sm:block hidden sm:h-14 left-0 mx-9 text-white border-[#FF7834] bg-[#FF7834] rounded-xl uppercase">
              Order now
            </button>
          )} */}
          {/* {currentBannerIndex === 2 && (
            <button className='uppercase'>Add to cart</button>
          )} */}
        </div>
        <div className="flex items-center justify-between py-5">
          <h1 className="sm:text-2xl text-xl font-semibold">Restaurant</h1>
          <div className="flex gap-2 items-center">
            <h2 className="text-[#FF7834] sm:text-[17.77px] text-[13px] font-normal">
              View all
            </h2>
            <img src={arrowside} alt="Arrow side" className="sm:w-2 w-1.5" />
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Dashboard;