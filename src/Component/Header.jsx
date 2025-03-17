import React, { useState } from "react";
import main_logo from "../Assets/Images/logo.png";
import "../Style/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header_wrapper">
        <div className="header_logo_side">
          <img src={main_logo} alt="Logo" />
          
        </div>
        <div className={`navbaar_wrapper ${menuOpen ? "show_menu" : ""}`}>
          <ul>
            <NavLink to={"/"} className={"navlink"}>
              Home
            </NavLink>
            <NavLink to={"/about"} className={"navlink"}>
              About
            </NavLink>

            <NavLink className={"navlink"} to={"/article"}>
              Articles
            </NavLink>
            <NavLink className={"navlink"} to={"/faq"}>
              FAQ
            </NavLink>
         
            <NavLink className={"navlink"} to={"/chetna"}>
              Chetna
            </NavLink>
            <NavLink className={"navlink"}>Contact</NavLink>
          </ul>
        </div>

        {/* Hamburger button */}

        {/* Navigation menu */}

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="cross">&#10005;</span>
          ) : (
            <span>&#9776;</span>
          )}
        </div>
      </div>
      {/* <Slider /> */}
    </>
  );
}

export default Header;
