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
        <div className="flex flex-row">
          <div className="fixed">
          <Settings />
          </div>
          <div className="bg-[#EDF5FA] w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
