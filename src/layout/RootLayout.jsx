import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import FooterDesktop from "../components/footer/FooterDesktop";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <FooterDesktop/>
    </div>
  );
};

export default RootLayout;