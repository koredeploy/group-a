import { Link } from "react-router-dom";
// import background from "../../../assets/bg_vendor.png";
import "../VendorForm1/VendorForm1.Module.css";

const VendorForm1 = () => {
  
  return (
    <div className="vendorHero text-white py-[2rem] overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center md:text-[32px] text-[24px] font-medium ">Vendor Sign Up Form</h1>

        <div className="w-[70rem] border-[1px] my-[2rem] rounded relative">
          <div className="">
            <div className="absolute rounded-full py-[.3rem] px-[.3rem] bg-[#FF7834] border-[#FF7834] -top-3 md:left-[22rem] left-[30rem]">
              <div className="rounded-full p-[6px] border-[#ffff] bg-[#ffff]"></div>
            </div>
            <p className="absolute px-[1rem] text-center top-[1rem] md:left-[17.7rem] left-[26.5rem] md:w-[10rem] w-[8rem]">
              Business Details
            </p>
            {/* 
            <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[35rem]"></div>
            <p className="absolute px-[1rem] top-[1rem] left-[30rem]">
              Business Operations
            </p> */}

            <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] md:left-[45rem] left-[38rem]"></div>
            <p className="absolute px-[1rem] top-[1rem] md:left-[39rem] text-center left-[34.5rem] md:w-[14rem] w-[8rem]">
              Legal and Compliance
            </p>
          </div>
        </div>

        <form className="flex flex-col justify-center items-center py-[3rem] px-[2rem] w-full ">
          <div className="text-white grid gap-[1rem]">
            <div className="grid gap-[.5rem]">
              <label className="text-[13px]" htmlFor="Business-Name">
                Business Name
              </label>
              <input
                type="text"
                className="border border-[#ffffff] text-[#000000] bg-[#ffffff] md:pr-[23rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
              />
            </div>
            {/* 
          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Contact-Person">Name of Contact Person</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[25rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div> */}

            <div className="grid gap-[.5rem]">
              <label className="text-[13px]" htmlFor="Business Address">
                Business Address
              </label>
              <input
                type="text"
                className="border border-[#ffffff] text-[#000000] bg-[#ffffff] md:pr-[23rem] pr-[20rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
              />
            </div>

            <div className="md:flex grid md:gap-[2rem] gap-[1rem]">
              <div className="grid gap-[.5rem]">
                <label className="text-[13px]" htmlFor="Phone-Number">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[5rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
                />
              </div>

              <div className="grid gap-[.5rem]">
                <label className="text-[13px]" htmlFor="Email">
                  Email
                </label>
                <input
                  type="text"
                  className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[5rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
                />
              </div>
            </div>
          </div>
      <div className="flex flex-col justify-center md:items-center items-start py-[1rem] w-full">
          <h1 className="text-white text-[14px] ">Delivery Option</h1>
          <div className="border-[.5px] md:w-[34.5rem] w-[20.5rem] mt-4"></div>
        <div className="flex gap-[3rem]">
          <div className="flex gap-[.5rem] pt-2">
            <span className="border p-3 rounded-md bg-[#ffffff]"></span>
            <h1 className="text-[#ffffff]">In-House Delivery</h1>
          </div>
          <div className="flex gap-[.5rem] pt-2">
            <span className="border p-3 rounded-md bg-[#ffffff]"></span>
            <h1 className="text-[#ffffff]">Pickup</h1>
          </div>
        </div>
      </div>
        </form>


        <div className="flex flex-col justify-center items-center  w-full">
          <div className="text-[#ffffff] rounded-full px-[.9rem] border-[3px] cursor-pointer border-[#FF7834] text-[30px]">
            &gt;
          </div>
        </div>
      </div>
    </div>
  // <div className="w-full relative flex flex-col justify-center items-center overflow-hidden">
  //   <div className="w-full">
  //     <img src={background} alt="" className="w-full" />
  //   </div>
  //   <div className="absolute flex flex-col text-white -top-[16rem] justify-center items-center gap-[1rem] py-[1rem] h-full w-full">
  //     <h1 className="text-[32px] font-medium">Vendor Sign Up Form</h1>
  //     <p className="text-center mb-[1rem] text-[16px]">
  //       Please fill out the form below to join our platform and start offering
  //       your delicious meals to <br /> students and teachers at our EdTech
  //       institution
  //     </p>
  
  //     <div className="md:w-[70rem] border-[1px]  rounded relative">
  //       <div className="">
  //         <div className="absolute rounded-full py-[.3rem] px-[.3rem] bg-[#FF7834] border-[#FF7834] -top-3 left-[22rem]">
  //           <div className="rounded-full p-[6px] border-[#ffff] bg-[#ffff]"></div>
  //         </div>
  //         <p className="absolute px-[1rem] top-[1rem] left-[17.7rem]">
  //           Business Details
  //         </p>
  //         {/*
  //         <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[35rem]"></div>
  //         <p className="absolute px-[1rem] top-[1rem] left-[30rem]">
  //           Business Operations
  //         </p> */}
  
  //         <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[45rem]"></div>
  //         <p className="absolute px-[1rem] top-[1rem] left-[39rem]">
  //           Legal and Compliance
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  
  //   <form className="absolute flex flex-col justify-center items-center top-[2rem] w-full h-full">
  //     <div className="text-white grid gap-[1rem]">
  //       <div className="grid gap-[.5rem]">
  //         <label className="text-[13px]" htmlFor="Business-Name">
  //           Business Name
  //         </label>
  //         <input
  //           type="text"
  //           className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[18rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
  //         />
  //       </div>
  //       {/*
  //       <div className="grid gap-[.5rem]">
  //         <label className="text-[13px]" htmlFor="Contact-Person">Name of Contact Person</label>
  //         <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[25rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
  //       </div> */}
  
  //       <div className="grid gap-[.5rem]">
  //         <label className="text-[13px]" htmlFor="Business Address">
  //           Business Address
  //         </label>
  //         <input
  //           type="text"
  //           className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[18rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
  //         />
  //       </div>
  
  //       <div className="flex gap-[2rem]">
  //         <div className="grid gap-[.5rem]">
  //           <label className="text-[13px]" htmlFor="Phone-Number">
  //             Phone Number
  //           </label>
  //           <input
  //             type="text"
  //             className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[3rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
  //           />
  //         </div>
  
  //         <div className="grid gap-[.5rem]">
  //           <label className="text-[13px]" htmlFor="Email">
  //             Email
  //           </label>
  //           <input
  //             type="text"
  //             className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[3rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </form>
  
  //   <div className="absolute flex flex-col justify-center items-center top-[13rem] w-full h-full">
  //     <h1 className="text-white text-[14px]">Delivery Option</h1>
  //     <div className="border-[1px] w-[45rem] mt-4"></div>
  //     <div className="flex gap-[3rem]">
  //       <div className="flex gap-[.5rem] pt-2">
  //         <span className="border p-3 rounded-md bg-[#ffffff]"></span>
  //         <h1 className="text-[#ffffff]">In-House Delivery</h1>
  //       </div>
  //       <div className="flex gap-[.5rem] pt-2">
  //         <span className="border p-3 rounded-md bg-[#ffffff]"></span>
  //         <h1 className="text-[#ffffff]">Pickup</h1>
  //       </div>
  //     </div>
  //   </div>
  
  //   <div className="absolute flex flex-col justify-center items-center top-[19rem] w-full h-full">
  //     <div className="text-[#ffffff] rounded-full px-[.9rem] border-[3px] cursor-pointer border-[#FF7834] text-[30px]">
  //       &gt;
  //     </div>
  //   </div>
  // </div>
  );
};

export default VendorForm1;
