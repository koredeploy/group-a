import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import handleAuthError from "../utils/handleAuthError";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  };
  const contextData = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};
