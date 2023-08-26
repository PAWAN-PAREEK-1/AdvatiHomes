import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Assets/img/logo.svg";
import arrow from "../Assets/img/twoarrow.svg";
// import search from "../Assets/img/search.svg";

const Navbar = () => {
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

          <ul className="NavbarList ">
            <li  className="active">
              <NavLink
                exact
                to="/"

                onClick={closeMenu}
              >
                Home

                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/About"  onClick={closeMenu}>
                About Us
                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects"  onClick={closeMenu}>
                Projects
                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                // className="active"
                onClick={closeMenu}
              >
                Services
                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Amenities"
                // className="active"
                onClick={closeMenu}
              >
                Amenities
                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/Villas"
                // className="active"
                onClick={closeMenu}
              >
               Villas
               <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Faq"  onClick={closeMenu}>
                FAQ's
                <div className="c-active">
                  <span></span>
                </div>
              </NavLink>
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
