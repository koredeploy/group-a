import { Icon } from "@iconify/react/dist/iconify.js";
import fried from "../../../assets/fried.svg";
import chick from "../../../assets/chick.svg";
import burger from "../../../assets/burg.svg";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <section className="sm:flex text-black sm:px-0 px-5">
      <div className="sm:pl-[18rem] sm:px-[2rem]  w-full sm:py-[7rem] py-[2rem] pt-[9rem]">
        <h1 className="text-[28.5px] border-b w-full border-[#80808080] font-semibold text-[#0C513F] py-[1rem]">
          My Cart
        </h1>
        <div className=" flex justify-between border-b border-[#80808080] py-10">
          <div className="flex gap-5">
            <div className="">
              <img src={chick} alt="fried rice" className="" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="sm:text-lg text-sm font-semibold flex flex-col">
                Fried Rice & Chicken{" "}
                <span className="text-[13px] font-medium text-[#FF7834]">
                  Muna Bee's Kitchen
                </span>{" "}
              </h1>

              <h2 className="sm:text-[13px] text-[10px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border sm:py-1 sm:px-4 py-[2px] px-2 rounded-md bg-[#FF7834] border-[#FF7834] text-white sm:text-sm text-xs">
                Customize
              </button>
              <div className="flex gap-4 items-center">
                <button className="border  px-1.5 text-white bg-gray-300">
                  -
                </button>
                <span className="sm:text-[21.9px] text-[19.69px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">
                  +
                </button>
                <h4 className="sm:text-[22.8px] text-xl text-black font-semibold">
                  N6000
                </h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] rounded-md sm:w-8 sm:h-7 w-10 h-5 mx-10"
          />
        </div>
        <div className=" flex justify-between border-b border-[#80808080] py-5">
          <div className="flex gap-5">
            <div>
              <img src={fried} alt="pizza" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-lg font-semibold flex flex-col">
                Fried Rice & Chicken{" "}
                <span className="text-[13px] font-medium text-[#FF7834]">
                  Muna Bee's Kitchen
                </span>{" "}
              </h1>

              <h2 className="text-[13px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border py-1 px-4 rounded-md bg-[#FF7834] border-[#FF7834] text-white text-sm">
                Customize
              </button>
              <div className="flex gap-4 items-center">
                <button className="border  px-1.5 text-white bg-gray-300">
                  -
                </button>
                <span className="text-[21.9px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">
                  +
                </button>
                <h4 className="text-[22.8px] text-black font-semibold">
                  N6000
                </h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] sm:w-8 sm:h-7 w-10 h-5 rounded-md mx-10"
          />
        </div>
        <div className=" flex justify-between border-b border-[#80808080] py-5">
          <div className="flex gap-5">
            <div>
              <img src={burger} alt="burger" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-lg font-semibold flex flex-col">
                Fried Rice & Chicken{" "}
                <span className="text-[13px] font-medium text-[#FF7834]">
                  Muna Bee's Kitchen
                </span>{" "}
              </h1>

              <h2 className="text-[13px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border py-1 px-4 rounded-md bg-[#FF7834] border-[#FF7834] text-white text-sm">
                Customize
              </button>
              <div className="flex gap-4 items-center">
                <button className="border  px-1.5 text-white bg-gray-300">
                  -
                </button>
                <span className="text-[21.9px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">
                  +
                </button>
                <h4 className="text-[22.8px] text-black font-semibold">
                  N6000
                </h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] rounded-md sm:w-8 sm:h-7 w-10 h-5 mx-10"
          />
        </div>
      </div>

      <div className="border sm:w-[22rem] w-full h-[20rem] bg-white z-1 sm:px-0 px-5 ml-[rem] my-[5.5rem] text-black">
        <h1 className="py-5 px-5 text-lg">SUMMARY</h1>
        <div className="border-t mx-5 flex flex-col gap-3 ">
          <h2 className="flex justify-between mt-5 text-[13.35px] items-center">
            Subtotal:{" "}
            <span className="font-semibold text-[15.94px]">N20,000</span>
          </h2>
          <h2 className="flex justify-between text-[13.35px] items-center">
            Delivery:Fee{" "}
            <span className="font-semibold text-[15.94px]">N500</span>
          </h2>
          <h2 className="flex justify-between items-center border-b pb-6 text-[13.35px]">
            Total{" "}
            <span className="text-[#FF7834] text-[29.89px] font-semibold">
              #20,500
            </span>
          </h2>
          <Link to={'/internal/checkout'} className="border py-2 w-full rounded-md bg-[#FF7834] text-center border-[#FF7834] text-white mt-5 text-lg">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
