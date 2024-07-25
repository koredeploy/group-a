import React from "react";
import { Outlet } from "react-router-dom";
import SidebarInternal from "../components/sidebarInternal/SidebarInternal";
import Header from "../components/header/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import Cart from "../components/Cart/Cart";
import { AuthProvider } from "../context/AuthContext";
import RouteGuard from "../utils/RouteGuard";

const LayoutInternal = () => {
  return (
    <AuthProvider>
      <div className="flex flex-row  bg-neutral-100 h-screen w-screen overflow-hidden">
        <SidebarInternal />
        <div className="">
          <Header />
          <div>{<Outlet />}</div>
          <div className="flex gap-10">
            <Dashboard />
            <Cart />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default LayoutInternal;
