import { useLocation } from "react-router-dom";
import fill from "../../../assets/fill.svg";
import arrow from "../../../assets/point.svg";

const Checkout = () => {
  const location = useLocation();
  const { subtotal, deliveryFee, total } = location.state || {};

  return (
    <div className="sm:flex sm:px-0 px-5">
      <div className="sm:pl-[16rem] sm:px-[2rem] px-5  w-full sm:py-[7rem] py-[2rem] pt-[10rem] text-black">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-[#0C513F] font-semibold">Checkout</h1>
          <div className="sm:flex items-center gap-2  hidden">
            <img src={arrow} alt="arrow" className="border bg-white py-3 rounded-md px-2"/>
            <h2 className="text-base leading-[18px]">Back <br /> to Cart</h2>
          </div>
        </div>
        <div className="bg-white text-[#FF7834] sm:p-5 mt-5">
          <h1 className="text-lg font-medium">Personal info</h1>

          <form className="text-black text-base flex flex-col gap-5 mt-5">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Eden"
                className="w-full border py-2 px-2 outline-none rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="tedible@yahoo.com"
                className="w-full border py-2 px-2 outline-none rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="1, Ogunlesi street, off Awoyokun, Onipan, Lagos."
                className="w-full border py-2 px-2 outline-none rounded-md text-sm"
              />
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                placeholder="+234 000 0000 000"
                className="w-full border py-2 px-2 outline-none rounded-md text-sm"
              />
              <img
                src={fill}
                alt="upload"
                className="absolute right-0 top-9 mx-10"
              />
            </div>
          </form>
        </div>
        <button className="mt-5 border py-1 px-5 rounded-md bg-[#FF7834] text-white">
          Make Payment
        </button>
      </div>
      <div className="border sm:w-[22rem] w-full h-[20rem] bg-white z-1 sm:px-0 px-5 ml-[rem] my-[5.5rem] text-black flex flex-col">
        <h1 className="py-5 px-5 text-lg">SUMMARY</h1>
        <div className="border-t mx-5 flex flex-col gap-3 ">
          <h2 className="flex justify-between mt-5 text-[13.35px] items-center">
            Subtotal:{" "}
            <span className="font-semibold text-[15.94px]">{`N${subtotal}`}</span>
          </h2>
          <h2 className="flex justify-between text-[13.35px] items-center">
            Delivery Fee{" "}
            <span className="font-semibold text-[15.94px]">{`N${deliveryFee}`}</span>
          </h2>
          <h2 className="flex justify-between items-center border-b pb-6 text-[13.35px]">
            Total{" "}
            <span className="text-[#FF7834] text-[29.89px] font-semibold">
              {`N${total}`}
            </span>
          </h2>
          <button className="border py-2 w-full rounded-md bg-[#ff783457] text-center border-[#ff783426] text-white mt-5 text-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
