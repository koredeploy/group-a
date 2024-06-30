import background from "../../../assets/bg_vendor.png";
import check from "../../../assets/check.png";
import '../VendorForm1/VendorForm1.Module.css'

const VendorForm2 = () => {
  return (
    <div className="vendorHero w-full relative flex flex-col justify-center items-center overflow-hidden px-[5rem]">
      <div className=" flex flex-col text-[#ffffff]  justify-center items-center gap-[1rem] py-[2rem]">
        <h1 className="md:text-[32px] text-[24px] font-medium">Vendor Sign Up Form</h1>
        {/* <p className="text-center mb-[1rem] text-[16px]">
          Please fill out the form below to join our platform and start offering
          your delicious meals to <br /> students and teachers at our EdTech
          institution
        </p> */}

        <div className="w-[70rem] my-[2rem] border-[1px] rounded relative">
          <div className="">
            <div className="absolute rounded-full py-[.2rem] px-[.2rem] border-[#ffff] bg-[#ffff] -top-3 md:left-[22rem] left-[30rem]">
              <div className="rounded-full py-[.2rem] px-[.2rem] bg-[#FF7834] border-[#FF7834]">
                <img src={check} alt="" className="w-[.7rem]" />
              </div>
            </div>
            <p className="absolute px-[1rem] text-center top-[1rem] md:left-[17.7rem] left-[26.5rem] md:w-[10rem] w-[8rem]">
              Business Details
            </p>

            {/* <div className="absolute rounded-full py-[.65rem] px-[.65rem] bg-[#A9ACAF] border-[#A9ACAF] -top-[11px] left-[35rem]"></div>
            <p className="absolute px-[1rem] top-[1rem] left-[30rem]">
              Business Operations
            </p> */}

            <div className="absolute rounded-full py-[.2rem] px-[.2rem] bg-[#ffffff] border-[#ffffff] -top-[11px] md:left-[45rem] left-[38rem]">
              <div className="border rounded-full  bg-[#FF7834] border-[#FF7834] py-[.2rem] px-[.2rem]">
                <div className="rounded-full border bg-[#ffffff] border-[#ffffff] py-[.2rem] px-[.2rem]"></div>
              </div>
            </div>
            <p className="absolute px-[1rem] top-[1rem] md:left-[39rem] text-center left-[34.5rem] md:w-[14rem] w-[8rem]">
              Legal and Compliance
            </p>
          </div>
        </div>



        <div className="md:flex grid gap-[2rem] py-[3rem] px-[2rem] justify-center w-full">
          <div className="md:flex flex-col mx-[rem] bg-[#ffffff] text-[#000000] border gap-[1rem] rounded-lg py-[2.8rem] px-[2rem] w-full wrapper overflow-hidden hidden">
            <h1 className="text-[24px] pt-3">Legal and Compliance</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium asperiores quam id, dolore consectetur eaque rerum ipsam
              velit? Alias impedit quibusdam fuga architecto vitae recusandae,
              harum nam placeat similique commodi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. 
              voluptatem.
            </p>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
              aliquam autem vel ut reiciendis quod odio architecto molestiae natus
              possimus repudiandae fugiat, rerum quibusdam debitis cumque laborum
              consectetur exercitationem.
            </p>
          </div>

          <div className="text-[#ffffff] md:border border-none w-full md:bg-[#073126C4] rounded-lg md:border-[#72ab9cc4] flex flex-col py-[1rem] md:px-0 px-[2rem] gap-[.7rem] items-center justify-center ">
            <h1 className="md:text-[30px] md:block hidden font-semibold">Complete SignUp</h1>
            <div className="border-[.5px] w-[24rem] md:block hidden"></div>
            
            <form className="flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[.3rem]">
                <label className="md:text-[14px] text-[12px]" htmlFor="name">Full Name</label>
                <input type="text" 
                id="name" 
                className="outline-none px-[1rem] md:pr-[13rem] pr-[3rem] rounded-md py-[.7rem] text-[#000000]" />
              </div>
              <div className="flex flex-col gap-[.3rem]">
                <label className="md:text-[14px] text-[12px]" htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                className="outline-none px-[1rem] md:pr-[13rem] pr-[3rem] rounded-md py-[.7rem] text-[#000000]" />
              </div>
              <div className="flex flex-col gap-[.3rem]">
                <label className="md:text-[14px] text-[12px]" htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  className="outline-none px-[1rem] md:pr-[13rem] pr-[3rem] rounded-md py-[.7rem] text-[#000000]"
                />
              </div>
              <div className="flex gap-[.5rem] items-center">
                <div className="rounded-lg border-[3px] p-2.5"></div>
                <h1 className="md:text-[16px] text-[14px]">I agree to all the <span className="text-[#ff7834]">terms and conditions</span></h1>
              </div>

              <button type="submit" className="border border-[#A9ACAF] bg-[#A9ACAF] hover:border-[#ff7834] w-full py-[.7rem] rounded-lg hover:bg-[#ff7834]">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:py-[2rem] py-[1rem] w-full">
          <div className="text-[#ffffff] rounded-full px-[.9rem] border-[3px] cursor-pointer border-[#FF7834] text-[30px]">
          &#60;
          </div>
      </div>
    </div>
  );
};

export default VendorForm2;
