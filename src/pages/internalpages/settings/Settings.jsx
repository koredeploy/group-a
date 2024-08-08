import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings_Sidebar_Links } from "../../../lib/consts/navigation";
import classNames from "classnames";

const linkClasses =
  "flex sm:flex-row border flex-col items-center gap-2 font-light sm:px-3 sm:py-3 py-2 px-2 hover:bg-[#ffcdb4] hover:text-white hover:no-underline active:bg-[#FF7834] rounded-md text-[14px]";

const Settings = () => {
  return (
    <div className="z-0 overflow-hidden">
      <div className="sm:pl-[18rem] sm:px-[2rem] px-4 w-full sm:py-[7rem] pt-[10rem]">
        <h1 className="text-[28.5px] font-semibold text-[#0C513F] py-[1rem]">
          Settings
        </h1>
        <div className="sm:border border-none sm:w-[15rem] w-full text-nowrap no-scrollbar  overflow-x-auto  px-[1rem] bg-white rounded-md text-[#0C513F]  sm:h-[40rem] h-full">
          <div className="flex sm:flex-col flex-row gap-5 sm:pl-3 sm:pt-[3rem]">
            {Settings_Sidebar_Links.map((item) => (
              <SideBarLink key={item.key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

function SideBarLink({ item }) {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = pathname === item.path;
  const imageSrc = isActive || isHovered ? item.image2 : item.image;

  return (
    <Link
      to={item.path}
      className={classNames(
        isActive ? "bg-[#FF7834] text-white" : "text-[#0C513F]",
        linkClasses
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={item.label} />
      {item.label}
    </Link>
  );
}
