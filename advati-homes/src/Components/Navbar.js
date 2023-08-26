import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Assets/img/logo.svg";
import arrow from "../Assets/img/twoarrow.svg";
// import search from "../Assets/img/search.svg";


const Navbar = ({activeUrl}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <div
            className={`menuIcon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
{}
          <ul className="NavbarList ">
            <li  className={activeUrl === "/" ? "active" : null}>
              <NavLink
                exact
                to="/"

                onClick={closeMenu}
              >
                Home
              </NavLink>
              <div></div>
            </li>
            <li className={activeUrl == "/About" ? "active" : null}>
              <NavLink to="/About"  onClick={closeMenu}>
                About Us
              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Projects" ? "active" : null}>
              <NavLink to="/Projects"  onClick={closeMenu}>
                Projects
              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Services" ? "active" : null}>
              <NavLink
                to="/Services"
                // className="active"
                onClick={closeMenu}
              >
                Services

              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Amenities" ? "active" : null}>
              <NavLink
                to="/Amenities"
                // className="active"
                onClick={closeMenu}
              >
                Amenities

              </NavLink>
              <div></div>
            </li>


            <li className={activeUrl == "/Villas" ? "active" : null}>
              <NavLink
                to="/Villas"
                // className="active"
                onClick={closeMenu}
              >
               Villas

              </NavLink>
              <div></div>
            </li>
            <li className={activeUrl == "/Faq" ? "active" : null}>
              <NavLink to="/Faq"  onClick={closeMenu}>
                FAQ's

              </NavLink>
              <div></div>
            </li>
          </ul>
        </nav>

        <div className="right-nav">
          <div className="search">
            <a href="">
              <img src={""} alt="" />
            </a>
          </div>
          <div className="quote-btn cursor-pointer">
            <a href="">Get Quotes <img src={arrow} alt="" /> </a>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="mobileNav">
          <div className="closebtn" onClick={() => setMenuOpen(false)}>
            <img src="../public/assets/img/close.svg" alt="" />
          </div>
          <ul>
          <li>
              <NavLink
                exact
                to="/"
                className="active"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="active" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className="active"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Amenities"
                className="active"
                onClick={closeMenu}
              >
                Amenities
              </NavLink>
            </li>
            <li>
              <NavLink to="/Faq" className="active" onClick={closeMenu}>
                FAQ's
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className="active" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Villas"
                className="active"
                onClick={closeMenu}
              >
               Villas
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
    //   <NavLink to="/Gallery" className="active" onClick={closeMenu}>
    //   Gallery
    // </NavLink>
  );
};

export default Navbar;
