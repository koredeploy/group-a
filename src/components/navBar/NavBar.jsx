// import { Link, NavLink, useLocation } from "react-router-dom";
import { Link, NavLink, useLocation} from "react-router-dom";
import  { useState } from "react";
import logo from "../../assets/logo tedible.png";
import "../navBar/NavBar.css";
import SideBar from "../sideBar/SideBar";
import useAuth from "../../hooks/useAuth";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const location = useLocation();
  const routesWithoutNavbar = ["/LayoutInternal"];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);
  const [showDropDown, setShowDropdown] = useState(false);

  const { token, user, handleLogOut, } = useAuth();
  console.log(user);
  if(!isNavbarVisible){
    return null
  }

  // const { user } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="main-container">
        <Link to="/" className="NavLogo1">
          <img src={logo} alt="Logo" />
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
            <div className="flex gap-2 useravatar items-center">
              <img
                className=" rounded-full size-7"
                src={user?.avatar}
                alt="User Avatar"
              />
              <p className="txt-color">{user?.username}</p>
            </div>
            <p
              className="nodropdown"
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
