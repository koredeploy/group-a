import { Icon } from "@iconify/react/dist/iconify.js";
import fried from "../../../assets/fried.svg";
import chick from "../../../assets/chick.svg";
import burger from "../../../assets/burg.svg";

const CartPage = () => {
  return (
    <section className="flex">
      <div className="pl-[18rem] px-[2rem] w-full py-[7rem]">
        <h1 className="text-[28.5px] border-b w-full border-[#80808080] font-semibold text-[#0C513F] py-[1rem]">
          My Cart
        </h1>
        <div className=" flex justify-between border-b border-[#80808080] py-10">
          <div className="flex gap-5">
            <div>
              <img src={chick} alt="fried rice" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-lg font-semibold flex flex-col">Fried Rice & Chicken <span className="text-[13px] font-medium text-[#FF7834]">Muna Bee's Kitchen</span> </h1>
              

              <h2 className="text-[13px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border py-1 px-4 rounded-md bg-[#FF7834] border-[#FF7834] text-white text-sm">Customize</button>
              <div className="flex gap-4 items-center"> 
                <button className="border  px-1.5 text-white bg-gray-300">-</button>
                <span className="text-[21.9px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">+</button>
                <h4 className="text-[22.8px] text-black font-semibold">N6000</h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] rounded-md mx-10"
          />
        </div>
        <div className=" flex justify-between border-b border-[#80808080] py-5">
          <div className="flex gap-5">
            <div>
              <img src={fried} alt="pizza" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-lg font-semibold flex flex-col">Fried Rice & Chicken <span className="text-[13px] font-medium text-[#FF7834]">Muna Bee's Kitchen</span> </h1>
              

              <h2 className="text-[13px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border py-1 px-4 rounded-md bg-[#FF7834] border-[#FF7834] text-white text-sm">Customize</button>
              <div className="flex gap-4 items-center"> 
                <button className="border  px-1.5 text-white bg-gray-300">-</button>
                <span className="text-[21.9px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">+</button>
                <h4 className="text-[22.8px] text-black font-semibold">N6000</h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] rounded-md mx-10"
          />
        </div>
        <div className=" flex justify-between border-b border-[#80808080] py-5">
          <div className="flex gap-5">
            <div>
              <img src={burger} alt="burger" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-lg font-semibold flex flex-col">Fried Rice & Chicken <span className="text-[13px] font-medium text-[#FF7834]">Muna Bee's Kitchen</span> </h1>
              

              <h2 className="text-[13px]">
                1 Medium sixed BBQ Chicken pizza free fries, onion, cheese,
                tomato
              </h2>
              <button className="border py-1 px-4 rounded-md bg-[#FF7834] border-[#FF7834] text-white text-sm">Customize</button>
              <div className="flex gap-4 items-center"> 
                <button className="border  px-1.5 text-white bg-gray-300">-</button>
                <span className="text-[21.9px]">1</span>
                <button className="border  px-1.5 text-white bg-gray-800">+</button>
                <h4 className="text-[22.8px] text-black font-semibold">N6000</h4>
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:remove"
            style={{ color: "white" }}
            fontSize={30}
            className="border border-[#FF7834] bg-[#FF7834] rounded-md mx-10"
          />
        </div>
      </div>

      <div className="border w-[22rem] h-[20rem] bg-white z-1 mx-[rem] ml-[rem] my-[5.5rem] text-black">
        <h1 className="py-5 px-5 text-lg">SUMMARY</h1>
        <div className="border-t mx-5 flex flex-col gap-3 ">
          <h2 className="flex justify-between mt-5 text-[13.35px] items-center">Subtotal: <span className="font-semibold text-[15.94px]">N20,000</span></h2>
          <h2 className="flex justify-between text-[13.35px] items-center">Delivery:Fee <span className="font-semibold text-[15.94px]">N500</span></h2>
          <h2 className="flex justify-between items-center border-b pb-6 text-[13.35px]">Total <span className="text-[#FF7834] text-[29.89px] font-semibold">#20,500</span></h2>
          <button className="border py-2 w-full rounded-md bg-[#FF7834] border-[#FF7834] text-white mt-5 text-lg">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
