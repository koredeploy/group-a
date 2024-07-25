import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import cart from "../../assets/cart.svg";
import bell from "../../assets/bell.svg";
import photo from "../../assets/photo.svg";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const inputClass =
  "w-[62rem] outline-none px-8 bg-[#F7FAFC] border border-[#0000005a]  rounded-lg py-2";
const iconClass =
  "w-10 rounded-full border py-2 px-2 bg-[#E6ECEB] hover:bg-[#FF7834] hover:no-underline active:bg-[#FF7834]";
const counter =
  "absolute -top-3 rounded-full -right-1 border text-[10px] px-2 bg-[#BD3826] border-[#BD3826] text-white py-1";

const Header = () => {
  const [showDropDown, setShowDropdown] = useState(false);
  const { token, user} = useAuth();


  return (
    <div className="border-b-[1px] w-screen p-[1.2rem] text-black bg-white pb-[1rem]">
      <div className="w-full flex gap-10 items-center">
        <h1 className="font-semibold">Welcome Back</h1>

        <div className="relative flex items-center w-[66rem]">
          <CiSearch className="absolute px-2" fontSize={35} />
          <input type="text" placeholder="Search" className={inputClass} />
        </div>

        <div className="flex gap-5 rounded-full">
          <img src={cart} alt="" className={iconClass} />
          <div className="relative">
            <img src={bell} alt="" className={iconClass} />
            <span className={counter}>0</span>
          </div>
          {token && (
            <div className="flex gap-4 dropss relative">
              <p>{user?.username}</p>
              <p
                onClick={() => {
                  setShowDropdown(!showDropDown);
                }}
              >
                <IoIosArrowDown />
              </p>

              {showDropDown && (
                <div className="bg-white flex dropsss flex-col absolute top-12 left-12 z-50">
                  <button>Settings</button>
                  <hr />
                  <Link to="/">Go to Website</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
