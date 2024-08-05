import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import FooterDesktop from "../components/footer/FooterDesktop";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

const RootLayout = () => {
  return (
    <div>
      <Toaster />
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <Outlet />
          <Footer />
          <FooterDesktop />
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default RootLayout;
