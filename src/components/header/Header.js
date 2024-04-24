import "./header.css";
import { Link } from "react-router-dom";
import presentation from "../../img/presentation-food.jpg";

function Header() {
  return (
    <header className="header">
      <article className="header-presentation">
        <h1 className="header-title">Little Lemon</h1>
        <h3 className="header-subtitle">Chicago</h3>
        <p className="header-text">
          We are a family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist
        </p>
        <Link to="/booking" aria-label="on Click">
          <button className="header-button">Reserve a table</button>
        </Link>
      </article>
      <figure className="header-container-image">
        <img
          src={presentation}
          alt="restaurant presentation"
          className="header-presentation-image"
        />
      </figure>
    </header>
  );
}

export default Header;
