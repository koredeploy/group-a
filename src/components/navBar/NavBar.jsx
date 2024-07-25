// import { Link, NavLink, useLocation } from "react-router-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import logo from "../../assets/logo tedible.png";
import "../navBar/NavBar.css";
import SideBar from "../sideBar/SideBar";
import logoMobile from "../../assets/Logo mobile.png";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const location = useLocation();
  const routesWithoutNavbar = ["/layoutInternal", "/LayoutInternal"];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);

  const [showDropDown, setShowDropdown] = useState(false);

  const { token, user, handleLogOut, handleGetUser } = useAuth();

  if (!isNavbarVisible) {
    return null;
  }
  console.log(user);

  // const { user } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="main-container">
        <Link to="/">
          <img className="NavLogo1" src={logoMobile} alt="" />
        </Link>
        <Link to="/" className="NavLogo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="links">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive ? " active-link" : "noactivelink"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? " active-link" : "noactivelink"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/LayoutInternal"
            className={({ isActive }) =>
              isActive ? " active-link" : "noactivelink"
            }
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? " active-link" : "noactivelink"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? " active-link" : "noactivelink"
            }
          >
            About Us
          </NavLink>
        </div>
        {token ? (
          <div className="flex gap-2 dropss items-center relative">
            <div className="flex gap-2 items-center">
              <img className=" rounded-full size-7" src={user?.avatar} alt="User Avatar" />
              <p>{user?.username}</p>
            </div>
            <p
              onClick={() => {
                setShowDropdown(!showDropDown);
              }}
            >
              <IoIosArrowDown />
            </p>

            {showDropDown ? (
              <div className="bg-white flex dropsss flex-col absolute top-12 left-12 z-50">
                <button onClick={handleLogOut}>Log Out</button>
                <hr />
                <Link to="/LayoutInternal">Go to Dashboard</Link>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="buttons">
            <Link to="/login" className="btn1">
              Login
            </Link>
            <Link to="/studentvendor" className="btn2">
              Register
            </Link>
          </div>
        )}
        <SideBar />
      </div>
    </nav>
  );
};

export default NavBar;
