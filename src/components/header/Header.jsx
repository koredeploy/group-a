import { CiSearch } from "react-icons/ci";
// import { header } from "../../lib/consts/header";
import cart from "../../assets/cart.svg";
import cart2 from "../../assets/shopping.svg";
import bell from "../../assets/bell.svg";
import bell2 from "../../assets/bell_white.svg";
import photo from "../../assets/photo.svg";
import arrow from "../../assets/arrow.svg";
import { Link, useLocation } from "react-router-dom";

const inputClass =
  "w-full outline-none px-8 bg-[#F7FAFC] border border-[#0000005a]  rounded-lg py-2";
const iconClass =
  "w-10 rounded-full py-2.5 px-2.5 active:bg-[#FF7834] hover:no-underline flex flex-col items-center";
const counter =
  "absolute -top-5 rounded-full -left-3 mr-4 border text-[10px] sm:px-2 px-1.5 py-[2px] bg-[#BD3826] border-[#BD3826] text-white sm:py-1";

// const inputClass =
//   "w-[62rem] outline-none px-8 bg-[#F7FAFC] border border-[#0000005a]  rounded-lg py-2";
// const iconClass =
//   "w-10 rounded-full border py-2 px-2 bg-[#E6ECEB] hover:bg-[#FF7834] hover:no-underline active:bg-[#FF7834]";
// const counter =
//   "absolute -top-3 rounded-full -right-1 border text-[10px] px-2 bg-[#BD3826] border-[#BD3826] text-white py-1";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="border-b-[1px] flex w-full p-[1.5rem] text-black bg-white pb-[1rem] fixed z-10">
      <div className="flex gap-10 items-center w-full pl-[18rem] px-[5rem]">
        <h1 className="font-semibold ">Welcome Back</h1>

        <div className="relative flex items-center ">
          <CiSearch className="absolute px-2" fontSize={35} />
          <input type="text" placeholder="Search" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col items-end justify-end w-1/3">
        <div className="flex items-center justify-end gap-5 py-1 rounded-full">
          <Link
            to={"/internal/cart"}
            className={`${
              location.pathname === "/internal/cart"
                ? "border-[#FF7834] bg-[#FF7834]"
                : "border bg-[#E6ECEB] w-10"
            } ${iconClass}`}
          >
            <img src={pathname === "/internal/cart" ? cart2 : cart} alt="" />
          </Link>
          <Link
            to={"/internal/notification"}
            className={`${
              location.pathname === "/internal/notification"
                ? "border-[#FF7834] bg-[#FF7834]"
                : "border bg-[#E6ECEB] w-10"
            } ${iconClass}`}
          >
            <div className="relative">
              <img
                src={pathname === "/internal/notification" ? bell2 : bell}
                alt=""
              />
              <span className={counter}>0</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <img src={photo} alt="" className="w-10 " />
            <span>Eden</span>
          </div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="flex gap-5 rounded-full">
        <img src={cart} alt="" className={iconClass} />
        <div className="relative">
          <img src={bell} alt="" className={iconClass} />
          <span className={counter}>0</span>
        </div>
        {token && (
          <div className="flex gap-4 dropss relative">
            <p>{user?.username}</p>
            <p
              onClick={() => {
                setShowDropdown(!showDropDown);
              }}
            >
              <IoIosArrowDown />
            </p>

            {showDropDown && (
              <div className="bg-white flex dropsss flex-col absolute top-12 left-12 z-50">
                <button>Settings</button>
                <hr />
                <Link to="/">Go to Website</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

{
  /* <div
className="relative w-10 h-10"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
{isHovered ? (
  <FaUserCircle className="w-10 h-10 text-[#FF7834]" />
) : (
  <img src={photo} alt="photo" className="w-10 h-10" />
)} 
</div> */
}
