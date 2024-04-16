import { useState } from "react";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="nav">
      <ul className={` nav-menu ${showLinks ? "show-nav" : "hide-nav"}`}>
        <li className="nav-option">
          <a href="/">Home</a>
        </li>
        <li className="nav-option">
          <a href="/">About</a>
        </li>
        <li className="nav-option">
          <a href="/">Menu</a>
        </li>
        <li className="nav-option">
          <a href="/">Reservations</a>
        </li>
        <li className="nav-option">
          <a href="/">Order Online</a>
        </li>
        <li className="nav-option">
          <a href="/">Login</a>
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
