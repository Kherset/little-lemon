import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../img/little-lemon-nav.png";
import "./nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img
          src={logo}
          alt="Logo little Lemon"
          className="nav-logo"
          id="header-logo"
        />
      </Link>
      <ul className={` nav-links ${showLinks ? "show-nav" : "hide-nav"}`}>
        <li className="nav-option">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-option">
          <Link to="/#footer">About</Link>
        </li>
        <li className="nav-option">
          <Link to="/#weeks-specials-title">Menu</Link>
        </li>
        <li className="nav-option">
          <Link to="/booking">Reservations</Link>
        </li>
        <li className="nav-option">
          <Link to="/#highlight-selections">Order Online</Link>
        </li>
        <li className="nav-option">
          <Link to="/">Login</Link>
        </li>
      </ul>
      <div
        id={`${showLinks ? "cross-menu" : "burger-menu"}`}
        onClick={handleShowLinks}
      ></div>
    </nav>
  );
}

export default Nav;
