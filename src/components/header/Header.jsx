import cart from "../../assets/cart.svg";
import { CiSearch } from "react-icons/ci";
import cart2 from "../../assets/shopping.svg";
import logo from "../../assets/logo.svg";
import bell from "../../assets/bell.svg";
import bell2 from "../../assets/bell_white.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import {
  Dashboard_Sidebar_Bottom_Links,
  Dashboard_Sidebar_Links,
} from "../../lib/consts/navigation";
import classNames from "classnames";
import { Icon } from "@iconify/react";

const inputClass =
  "w-full outline-none px-8 bg-[#F7FAFC] border border-[#0000005a] rounded-lg py-2";
const iconClass =
  "w-10 rounded-full py-2.5 px-2.5 active:bg-[#FF7834] hover:no-underline flex flex-col items-center";
const counter =
  "absolute -top-5 rounded-full -left-3 mr-4 border text-[10px] sm:px-2 px-1.5 py-[2px] bg-[#BD3826] border-[#BD3826] text-white sm:py-1";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-3 hover:bg-[#ffcdb4] hover:no-underline active:bg-[#FF7834] rounded-md text-[14px]";

const Header = () => {
  const [showDropDown, setShowDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { token, user } = useAuth() || {};
  const { pathname } = useLocation();

  useEffect(() => {
    // Close sidebar when the pathname changes
    setSidebar(false);
  }, [pathname]);
  useEffect(() => {
    // Add or remove the no-scroll class based on the sidebar state
    if (sidebar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [sidebar]);

  
  const ToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="border-b-[1px] flex w-full p-[1.5rem] text-black bg-white pb-[1rem] fixed z-10">
      <div className="flex sm:gap-5 gap-4 sm:flex-row flex-col sm:items-center w-full sm:pl-[15rem] sm:px-[5rem]">
        <h1 className="font-semibold sm:block hidden w-60">Welcome Back</h1>

        <div className="sm:hidden flex items-center gap-3">
          {/* HAMBURGER  */}
          <div className="displaysidebar relative" onClick={ToggleSidebar}>
            <div className="border-2 w-6 border-[#FF7834] rounded-full" />
            <div className="border-2 w-6 border-[#FF7834] rounded-full mt-1" />
            <div className="border-2 w-6 border-[#FF7834] rounded-full mt-1" />
          </div>
          {sidebar && (
            <div>
              <div className="w-full bg-[#0000005f] absolute h-screen z-10 top-0 left-0" onClick={ToggleSidebar}/>
              <div className="fade-in flex flex-col gap-5 top-0 left-0 text-white absolute bg-[#073126] z-20 w-60 h-screen px-5 pt-20">
                {Dashboard_Sidebar_Links.map((item) => (
                  <SideBarLink key={item.key} item={item} />
                ))}
                <Icon
                  icon="mdi:remove"
                  style={{ color: "white" }}
                  fontSize={30}
                  className="absolute top-7 right-5"
                  onClick={ToggleSidebar}
                />
                <div className="flex flex-col gap-3 pt-10">
                  {Dashboard_Sidebar_Bottom_Links.map((item) => (
                    <SideBarBottomLink key={item.key} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex w-full justify-between items-center">
            {/* LOGO  */}
            <img src={logo} alt="Logo" />

            {/* CART, NOTIFICATION AND PROFILE  */}
            <div className="flex gap-5">
              <div className="flex flex-col items-end justify-end w-full">
                <div className="flex items-center justify-end gap-5 py-1 rounded-full">
                  <Link
                    to={"/internal/cart"}
                    className={`${
                      pathname === "/internal/cart"
                        ? "border-[#FF7834] bg-[#FF7834]"
                        : "border bg-[#E6ECEB] w-10"
                    } ${iconClass}`}
                  >
                    <img
                      src={pathname === "/internal/cart" ? cart2 : cart}
                      alt="Cart"
                    />
                  </Link>
                  <Link
                    to={"/internal/notification"}
                    className={`${
                      pathname === "/internal/notification"
                        ? "border-[#FF7834] bg-[#FF7834]"
                        : "border bg-[#E6ECEB] w-10"
                    } ${iconClass}`}
                  >
                    <div className="relative">
                      <img
                        src={
                          pathname === "/internal/notification" ? bell2 : bell
                        }
                        alt="Bell"
                      />
                      <span className={counter}>0</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex gap-2 rounded-full">
                {token && (
                  <div className="flex gap-2 dropss relative">
                    <img
                      src={user?.avatar}
                      alt="avatar"
                      className="size-10 rounded-full"
                    />
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
          </div>
        </div>

        <div className="relative flex items-center w-full sm:pr-[10rem]">
          <CiSearch className="absolute px-2" fontSize={35} />
          <input type="text" placeholder="Search" className={inputClass} />
        </div>
      </div>
      <div className="sm:flex gap-5 hidden">
        <div className="flex flex-col items-end justify-end w-1/3">
          <div className="flex items-center justify-end gap-5 py-1 rounded-full">
            <Link
              to={"/internal/cart"}
              className={`${
                pathname === "/internal/cart"
                  ? "border-[#FF7834] bg-[#FF7834]"
                  : "border bg-[#E6ECEB] w-10"
              } ${iconClass}`}
            >
              <img
                src={pathname === "/internal/cart" ? cart2 : cart}
                alt="Cart"
              />
            </Link>
            <Link
              to={"/internal/notification"}
              className={`${
                pathname === "/internal/notification"
                  ? "border-[#FF7834] bg-[#FF7834]"
                  : "border bg-[#E6ECEB] w-10"
              } ${iconClass}`}
            >
              <div className="relative">
                <img
                  src={pathname === "/internal/notification" ? bell2 : bell}
                  alt="Bell"
                />
                <span className={counter}>0</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex gap-5 rounded-full">
          {token && (
            <div className="flex gap-4 dropss relative">
              <img
                src={user?.avatar}
                alt="avatar"
                className="size-10 rounded-full"
              />
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
    </div>
  );
};

export default Header;

function SideBarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-[#FF7834] text-white" : "text-white",
        linkClasses
      )}
      onClick={() => setSidebar(false)} // Close sidebar on link click
    >
      <img src={item.image} alt={item.label} />
      {item.label}
    </Link>
  );
}

function SideBarBottomLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      <img src={item.image} alt={item.label} />
      {item.label}
    </Link>
  );
}
