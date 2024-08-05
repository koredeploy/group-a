import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import "../sideBar/SideBar.css";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { token, user, handleLogOut } = useAuth();

  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("showMenu", showMenu);
    }
  }, [showMenu]);

  const closeSidebar = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div ref={navbarRef} className="sidebar-content">
        <button className="closesidebar" onClick={closeSidebar}>
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
          to="/LayoutInternal"
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
        <div>
          {token ? (
            <div>
              {/* <div className="flex gap-2 items-center">
                <img
                  className="rounded-full size-7"
                  src={user?.avatar}
                  alt="User Avatar"
                />
                <p>{user?.username}</p>
              </div> */}
              <button onClick={handleLogOut}>Log Out</button>
              <hr />
              <Link to="/LayoutInternal">Go to Dashboard</Link>
            </div>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/studentvendor">Register</NavLink>
            </>
          )}
        </div>
      </div>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={`text-2xl menu-icon`}
      >
        <Icon icon="ion:menu" />
      </div>
    </div>
  );
};

export default SideBar;
