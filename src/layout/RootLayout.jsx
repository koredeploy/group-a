import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import FooterDesktop from "../components/footer/FooterDesktop";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const RootLayout = () => {
  return (
    <div>
      <Toaster />
      <AuthProvider>
        <NavBar />
        <Outlet />
        <Footer />
        <FooterDesktop />
      </AuthProvider>
    </div>
  );
};

export default RootLayout;
