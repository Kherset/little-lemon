import logo from "../../img/little-lemon-logo-green.png";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <img src={logo} alt="Logo little Lemon" className="footer-logo" />
      <section className="footer-parts">
        <article className="footer-part">
          <h3 className="footer-title" id="footer-title">
            Important Links
          </h3>
          <ul className="footer-list">
            <li>
              <Link to="/#header-logo">Home</Link>
            </li>
            <li>
              <Link to="/#weeks-specials-title">Menu</Link>
            </li>
            <li>
              <Link to="/reserve-a-table">Reservations</Link>
            </li>
            <li>
              <Link to="/#highlight-selections">Order Online</Link>
            </li>
          </ul>
        </article>
        <article className="footer-part">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-list">
            <li>Address: 123 Town Street, Chicago</li>
            <li>Phone: +00 123 456 789</li>
            <li>Email: little@lemon.com</li>
          </ul>
        </article>
        <article className="footer-part">
          <h3 className="footer-title">Social Media Links</h3>
          <ul className="footer-list">
            <li>
              <Link to="https://www.facebook.com">Facebook</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com">Instagram</Link>
            </li>
            <li>
              <Link to="https://www.twitter.com">X</Link>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
