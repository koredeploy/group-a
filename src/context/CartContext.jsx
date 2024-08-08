import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import handleAuthError from "../utils/handleAuthError";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

export default CartContext;

// export const CartProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     navigate("/internal/dashboard");
//   };
//   const contextData = {
//     cart,
//     addToCart,
//   };
//   return (
//     <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
//   );
// };
export const CartProvider = ({ children, navigate }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    navigate("/internal/dashboard");
  };
  const contextData = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};

