import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import main_logo from "../Assets/Images/logo.png";
import "../Style/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header_wrapper">
      <div className="header_logo_side">
        <img src={main_logo} alt="Logo" className="logo" />
      </div>
      
      <nav className={`navbaar_wrapper ${menuOpen ? "show_menu" : ""}`}>
        <ul className="nav_links">
          <li><NavLink to="/" className="navlink" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="navlink" onClick={closeMenu}>About</NavLink></li>
      
          <li><NavLink to="/faq" className="navlink" onClick={closeMenu}>FAQ</NavLink></li>
          <li><NavLink to="/chetna" className="navlink" onClick={closeMenu}>Chetna</NavLink></li>
          <li><NavLink to="/contact" className="navlink" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>
      
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="cross">&#10005;</span>
        ) : (
          <span>&#9776;</span>
        )}
      </div>
    </header>
  );
}

export default Header;