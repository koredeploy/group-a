import React from "react";
import Cart from "../../../components/Cart/Cart";
import pen from "../../../assets/pen.svg";
import fill from "../../../assets/fill.svg";

const Profile = () => {
  return (
    <div className="flex">
      <div className="sm:pl-[16rem] sm:px-[2rem] px-5  w-full sm:py-[7rem] py-[2rem] pt-[10rem]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-[#0C513F] font-semibold">My Profile</h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 text-black">
          <div className="sm:border sm:py-[3rem] h-full sm:px-7 mt-5 flex sm:flex-col flex-row items-center sm:gap-1 gap-3 relative bg-white text-black">
            <div className="h-[8rem] w-[8rem] rounded-full border "/>
            <img
              src={pen}
              alt="upload"
              className="absolute sm:top-[9.8rem] top-[6.8rem] sm:left-[7rem] left-[5rem]  border rounded-full h-6 border-[#FF7834] bg-[#FF7834] w-6"
            />
            <h1 className="text-xl font-semibold">Eden Victor</h1>
          </div>
          <div className="sm:border sm:mt-5 mt-2 p-5 w-full h-full bg-white text-black">
            <h1 className="text-2xl text-[#0C513F] font-semibold">
              Personal Information
            </h1>

            <form className="mt-5 text-sm flex flex-col gap-4 text-[#8C8787]">
              <div className="flex sm:flex-row flex-col  gap-5">
                <div className="relative">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="border w-full rounded-md py-2 px-4 outline-none"
                  />
                  <img
                    src={fill}
                    alt=""
                    className="absolute right-0 top-8 mx-2"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="border w-full rounded-md py-2 px-4 outline-none"
                  />
                  <img
                    src={fill}
                    alt=""
                    className="absolute right-0 top-8 mx-2"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-4 outline-none"
                />
                <img
                  src={fill}
                  alt=""
                  className="absolute right-0 top-8 mx-2"
                />
              </div>
              <div className="relative">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-4 outline-none"
                />
                <img
                  src={fill}
                  alt=""
                  className="absolute right-0 top-8 mx-2"
                />
              </div>
              <div className="relative sm:w-60 w-full">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-4 outline-none"
                />
                <img
                  src={fill}
                  alt=""
                  className="absolute right-0 top-8 mx-2"
                />
              </div>

              <button className="border py-2 rounded-md border-[#ff783437] bg-[#ff78346d] text-white sm:w-60 w-full mt-5">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Profile;
