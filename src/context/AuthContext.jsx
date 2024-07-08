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
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGetUser = async () => {
    try {
      const { data } = await axiosInstance.get("/auth", {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Please Log In", { id: "special" });
      // localStorage.removeItem("token");
      // navigate("/signin");
    }
  };

  // console.log(user);
  const contextData = {
    user,
    setUser,
    token,
    setToken,
    handleSignUp,
    handleLogIn,
    isSubmitting,
    setIsSubmitting,
    handleGetUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
