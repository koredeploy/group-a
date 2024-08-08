import React from "react";
import Settings from "../pages/internalpages/settings/Settings";
import { Outlet } from "react-router-dom";
import SidebarInternal from "../components/sidebarInternal/SidebarInternal";
import Header from "../components/header/Header";

const SettingsLayout = () => {
  return (
    <div className="flex flex-row bg-[#EDF5FA] h-full w-full">
      <SidebarInternal />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex sm:flex-row flex-col sm:bg-transparent bg-white">
          <div className="sm:fixed">
          <Settings />
          </div>
          <div className="sm:bg-[#EDF5FA] bg-white w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;