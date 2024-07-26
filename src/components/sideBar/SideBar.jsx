import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import "../sideBar/SideBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("showMenu", showMenu);
    }
  }, [showMenu]);

  const closeSidebar = () => {
    setShowMenu(!true);
  };

  return (
    <div>
      <div ref={navbarRef} className="sidebar-content">
        <button
        className="closesidebar"
          onClick={closeSidebar}
        >
          X
        </button>
        <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "noactivelink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "active-link" : "noactivelink"
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            isActive ? "active-link" : "noactivelink"
          }
        >
          Restaurants
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : "noactivelink"
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : "noactivelink"
          }
        >
          About Us
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/studentvendor">Register</NavLink>
      </div>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={`text-2xl text-white menu-icon`}
      >
        <Icon icon="ion:menu" />
      </div>
    </div>
  );
};

export default SideBar;
