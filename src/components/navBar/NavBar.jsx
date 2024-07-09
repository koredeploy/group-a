// import { Link, NavLink, useLocation } from "react-router-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../../assets/logo tedible.png";
import "../navBar/NavBar.css";
import SideBar from "../sideBar/SideBar";
import logoMobile from "../../assets/Logo mobile.png";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const location = useLocation();
  const routesWithoutNavbar = ['/layoutInternal', '/LayoutInternal'];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);

  if (!isNavbarVisible) {
    return null;
  }

  
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
            to="/signupstudent"
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
        <div className="buttons">
          <Link to="/login" className="btn1">
            Login
          </Link>
          <Link to="/studentvendor" className="btn2">
            Register
          </Link>
        </div>
        <SideBar />
      </div>
    </nav>
  );
};

export default NavBar;
