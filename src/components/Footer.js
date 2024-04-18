import logo from "../img/little-lemon-logo-green.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <img src={logo} alt="Logo little Lemon" className="footer-logo" />
      <section className="footer-parts">
        <article className="footer-part">
          <h3 className="footer-title">Important Links</h3>
          <ul className="footer-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
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
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
