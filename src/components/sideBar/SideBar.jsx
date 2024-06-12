import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import "../sideBar/SideBar.css";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("showMenu", showMenu);
    }
  }, [showMenu]);

  return (
    <>
      <div ref={navbarRef} className="sidebar-content">
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

        
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div
        className="icon"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <RiMenu4Line className="bg-white" />
      </div>
    </>
  );
};

export default SideBar;