import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import handleAuthError from "../utils/handleAuthError";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("userinfo"));
    if (getUser) {
      setUser(getUser);
    }
  }, []);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem("userinfo", JSON.stringify(user));
    }
  }, [user]);

  const handleSignUp = async (formData) => {
    setIsSubmitting(true);
    console.log("Form Submitted");
    console.log(formData);
    try {
      const { data } = await axiosInstance.post("/api/auth/register", formData);
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success(`Welcome ${data.user.username}`);
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogIn = async (formData) => {
    setIsSubmitting(true);
    try {
      const { data } = await axiosInstance.post("/api/auth/login", formData);
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success(`Welcome ${data.user.username}`);
      navigate("/LayoutInternal");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleGetUser = async () => {
  //   try {
  //     const { data } = await axiosInstance.get(`/api/auth/${user.id}avatar`, {
  //       headers: {
  //         Authorization: ` Bearer ${token}`,
  //       },
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Please Log In", { id: "special" });
  //   }
  // };

  const handleContactForm = async (formData) => {
    setIsSubmitting(true);
    console.log(formData);
    try {
      const { data } = await axiosInstance.post("/api/contact-us", formData);
      toast.success("Message sent successfully");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userinfo");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const contextData = {
    user,
    setUser,
    token,
    setToken,
    handleSignUp,
    handleLogIn,
    isSubmitting,
    setIsSubmitting,
    handleContactForm,
    handleLogOut,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
