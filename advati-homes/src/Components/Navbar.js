import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
// import logo from "../Assets/img/logo.svg";
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
          <img src={""} alt="" />
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
            <li>
              <NavLink
                exact
                to="/"
                activeclassname="active"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeclassname="active" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                activeclassname="active"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Amenities"
                activeclassname="active"
                onClick={closeMenu}
              >
                Amenities
              </NavLink>
            </li>
            <li>
              <NavLink to="/Faq" activeclassname="active" onClick={closeMenu}>
                FAQ's
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" activeclassname="active" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Villas"
                activeclassname="active"
                onClick={closeMenu}
              >
               Villas
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
            <a href="">Get Quotes</a>
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
                activeclassname="active"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeclassname="active" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                activeclassname="active"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Amenities"
                activeclassname="active"
                onClick={closeMenu}
              >
                Amenities
              </NavLink>
            </li>
            <li>
              <NavLink to="/Faq" activeclassname="active" onClick={closeMenu}>
                FAQ's
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" activeclassname="active" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Villas"
                activeclassname="active"
                onClick={closeMenu}
              >
               Villas
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
    //   <NavLink to="/Gallery" activeclassname="active" onClick={closeMenu}>
    //   Gallery
    // </NavLink>
  );
};

export default Navbar;
