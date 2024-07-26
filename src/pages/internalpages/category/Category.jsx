import { rice, burger, dip, chicken, pizza } from "../../../assets";
import arrow from "../../../assets/arrow 2.svg";
import Cart from "../../../components/Cart/Cart";

const Category = () => {
  return (
    <div className="w-full flex mx-auto">
      <div className="pl-[18rem] px-[5rem] w-full py-[7rem]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-[#0C513F] font-semibold">Category</h1>
          <div className="flex items-center gap-4">
            <h2 className="text-[#073126] text-[18px] font-medium">
              Filter By Restaurant
            </h2>

            <div className="flex items-center border py-1 px-3 gap-2 bg-[#FF7834] border-[#FF7834] text-white rounded-md">
              <button className="text-[14px]">Muna `Bee&apos;s` Kitchen</button>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-full mt-8 gap-[2rem] text-base">
          <div className="flex flex-col items-center gap-3">
            <img src={chicken} alt="chicken" className="md:w-[13rem]" />
            <p>Chicken</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={dip} alt="dip" className="w-[13rem]" />
            <p>Sea Food</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={rice} alt="rice" className="md:w-[13rem]" />
            <p>Rice</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={pizza} alt="pizza" className="md:w-[13rem]" />
            <p>Pizza</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={burger} alt="burger" className="md:w-[13rem]" />
            <p>Burger</p>
          </div>
        </div>
        <div className="border-b mt-5 border-gray-300" />

        <div className="w-full border bg-[#073126] py-3 my-8 rounded-md">
          <h1 className="text-white px-8 text-xl">Chicken Wings</h1>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default Category;
