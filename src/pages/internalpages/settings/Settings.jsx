import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings_Sidebar_Links } from "../../../lib/consts/navigation";
import classNames from "classnames";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-3 hover:bg-[#ffcdb4] hover:text-white hover:no-underline active:bg-[#FF7834] rounded-md text-[14px]";

const Settings = () => {
  return (
    <div className="z-0">
      <div className="pl-[18rem] px-[2rem] w-full py-[7rem]">
        <h1 className="text-[28.5px] font-semibold text-[#0C513F] py-[1rem]">
          Settings
        </h1>
        <div className="border sm:w-[15rem] w-[40rem] px-[1rem] bg-white rounded-md text-[#0C513F]  sm:h-[40rem]">
          <div className="flex sm:flex-col flex-row gap-5 pl-3 pt-[3rem]">
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
