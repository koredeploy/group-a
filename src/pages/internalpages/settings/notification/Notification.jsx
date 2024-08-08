import React from "react";
import CartPage from "../../cartpage/CartPage";
import Cart from "../../../../components/Cart/Cart";

const Notifications = () => {
  return (
    <div className="flex">
      <div className="text-black pl-[33.3rem] w-full py-[11.75rem]">
        <div className="border bg-white text-black rounded-md px-[1.2rem] h-[40rem] w-full">
          <h1 className="py-[3rem] text-[28.5px] font-semibold text-[#0C513F]">
            Notification
          </h1>
          <div>
            <h2 className="text-base font-normal">
              Enable desktop notifications{" "}
            </h2>
            <h3 className="text-xs font-normal pt-2">
              Decide when you want ton be notified of new messages or <br />
              updates
            </h3>
            <div className="my-2">
              {/* <label htmlFor="check" className="relative cursor-pointer flex bg-gray-200 peer-checked:bg-[#FF7834] w-8 h-[1.1rem] rounded-full">
                    <input type="checkbox" id="check" className="sr-only peer"/>
                    <span className="w-2/5 h-4/5 bg-white absolute left-1 top-[0.1rem] rounded-full  peer-checked:left-4 transition-all duration-500"></span>
                </label> */}
              <label
                htmlFor="check"
                className="relative inline-flex cursor-pointer items-center"
              >
                <input type="checkbox" className="peer sr-only" id="check" />
                <div className="h-[1.1rem] w-9 rounded-full border-gray-200 bg-gray-200 after:absolute after:start-[2px] after:top-[.1rem] after:h-[.9rem] after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FF7834] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full transition-all duration-500"></div>
              </label>
            </div>

            <div className="mt-10">
              <h1 className="text-base">Email Notifications</h1>
              <p className="text-xs pt-1">
                Manage your notifications preferences
              </p>
              <div className="my-2">
                <label
                  htmlFor="checkbox"
                  className="relative inline-flex cursor-pointer items-center"
                >
                  <input type="checkbox" className="peer sr-only" id="checkbox" />
                  <div className="h-[1.1rem] w-9 rounded-full border-gray-200 bg-gray-200 after:absolute after:start-[2px] after:top-[.1rem] after:h-[.9rem] after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FF7834] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full transition-all duration-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Notifications;
