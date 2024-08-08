import React from "react";
import Cart from "../../../../components/Cart/Cart";
import location from '../../../../assets/location.svg'

const Support = () => {
  return (
    <div className="flex ">
      <div className="text-black sm:pl-[33.3rem] w-full sm:py-[11.75rem] py-[2rem] sm:px-0 px-4">
        <div className="border bg-white text-black rounded-md px-[1.2rem] h-[35rem] w-full">
          <h1 className="py-[2rem] text-[28.5px] font-semibold text-[#0c513f]">
            Contact Support
          </h1>
          <div className="flex gap-4 ">
            <div>
            <img src={location} alt="" className="border rounded-full bg-[#FF7834] border-[#FF7834] py-2 px-[.7rem] w-10"/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-[21.72px] font-medium">Our Head Quarters</h1>
                <h2 className="text-[16.29px] text-[#9C4920]">Find us on Google Map</h2>
                <h3 className="text-[16.29px]">1 Ogunlesi Street, Off Awoyokun, <br />
                Onipanu, Lagos.</h3>
            </div>
          </div>
            <div className="border-b-[2px] border-dashed w-full mt-6 border-[#000000]"/>
          <div className="flex gap-4 mt-5">
            <div>
            <img src={location} alt="" className="border rounded-full bg-[#FF7834] border-[#FF7834] py-2 px-[.7rem] w-10"/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-[21.72px] font-medium">Our Phone</h1>
                <h2 className="text-[16.29px] ">+ 234 7034857699</h2>
                <h3 className="text-[16.29px] ">+ 234 7034855669</h3>
            </div>
          </div>
            <div className="border-b-[2px] border-dashed w-full mt-6 border-[#000000]"/>
          <div className="flex gap-4 mt-5">
            <div>
            <img src={location} alt="" className="border rounded-full bg-[#FF7834] border-[#FF7834] py-2 px-[.7rem] w-10"/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-[21.72px] font-medium">Our Email</h1>
                <h2 className="text-[16.29px] ">contact@tedible.com</h2>
                <h3 className="text-[16.29px] ">info@tedible.com</h3>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Support;
