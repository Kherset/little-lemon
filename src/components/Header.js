import logo from "../img/little-lemon-header.png";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo little Lemon" className="header-logo" />
      <Nav />
    </header>
  );
}

export default Header;
