import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/head.png";
import cancel from "../Assets/cancel.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="main-nav flex">
        <Link to="/" className="logo" onClick={() => setMenu("home")}>
          <img src={logo} alt="Logo" />
        </Link>

        {!isOpen && (
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
          </button>
        )}

        {isOpen && (
          <button className="close-icon-btn" onClick={toggleMenu}>
            <img className="close-icon" src={cancel} alt="cancel" />
          </button>
        )}

        <div id="nav-links" className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul className="flex">
            <li className="hover-link nav-item">
              <Link
                id="Home"
                to="/"
                onClick={() => setMenu("home")}
                className={menu === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li className="hover-link nav-item">
              <Link
                id="Product"
                to="/product"
                onClick={() => setMenu("product")}
                className={menu === "product" ? "active" : ""}
              >
                Product
              </Link>
            </li>
            <li className="hover-link nav-item">
              <Link
                id="Contact"
                to="/contact"
                onClick={() => setMenu("contact")}
                className={menu === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
