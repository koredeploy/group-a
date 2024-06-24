import { Link } from "react-router-dom";
import background from "../../../assets/bg_vendor.png";

const VendorForm1 = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full">
        <img src={background} alt="" className="w-full" />
      </div>
      <div className="absolute flex flex-col text-white -top-[16rem] justify-center items-center gap-[1rem] py-[1rem] h-full w-full">
        <h1 className="text-[32px] font-medium">Vendor Sign Up Form</h1>
        <p className="text-center mb-[1rem] text-[16px]">
          Please fill out the form below to join our platform and start offering
          your delicious meals to <br /> students and teachers at our EdTech
          institution
        </p>

        <div className="md:w-[70rem] border-[1px]  rounded relative">
          <div className="">
            <div className="absolute rounded-full py-[.3rem] px-[.3rem] bg-[#FF7834] border-[#FF7834] -top-3 left-[15rem]">
              <div className="rounded-full p-[6px] border-[#ffff] bg-[#ffff]"></div>
            </div>
            <p className="absolute px-[1rem] top-[1rem] left-[11rem]">
              Business Details
            </p>

            <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[35rem]"></div>
            <p className="absolute px-[1rem] top-[1rem] left-[30rem]">
              Business Operations
            </p>

            <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[55rem]"></div>
            <p className="absolute px-[1rem] top-[1rem] left-[49rem]">
              Legal and Compliance
            </p>
          </div>
        </div>
      </div>

      <form className="absolute flex flex-col justify-center items-center top-[4rem] w-full h-full">
        <div className="text-white grid gap-[1rem]">

          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Business-Name">Business Name</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[25rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div>

          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Contact-Person">Name of Contact Person</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[25rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div>

          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Business Address">Business Address</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[25rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div>

          <div className="flex gap-[2rem]">
          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Phone-Number">Phone Number</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[6rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div>

          <div className="grid gap-[.5rem]">
            <label className="text-[13px]" htmlFor="Email">Email</label>
            <input type="text" className="border border-[#ffffff] text-[#000000] bg-[#ffffff] pr-[6rem] py-[.5rem] caret-black outline-none px-[1rem] w-full resize-none rounded-lg"/>
          </div>
          </div>

        </div>
          <div className="absolute flex flex-col justify-center items-center bottom-[6rem] w-full">
            <Link to="/VendorForm2" className="text-[#ffffff] rounded-full px-[.9rem] border-[3px] cursor-pointer border-[#FF7834] text-[30px]">
                 &gt;
            </Link>
          </div>
      </form>
    </div>
  );
};

export default VendorForm1;
