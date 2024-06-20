import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo tedible.png";
import "../navBar/NavBar.css";
import SideBar from "../sideBar/SideBar";
import logoMobile from "../../assets/Logo mobile.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="main-container">
        <img className="NavLogo1" src={logoMobile} alt="" />
        <img className="NavLogo" src={logo} alt="Logo" />
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
            to="/restaurants"
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
          <Link className="btn1">Login</Link>
          <Link className="btn2">Register</Link>
          <button className="btn3">Register as Student</button>
          <button className="btn4">Register as Vendor</button>
        </div>
        <SideBar />
      </div>
    </nav>
  );
};

export default NavBar;
