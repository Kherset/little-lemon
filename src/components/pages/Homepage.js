import "../../App.css";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <div className="homepage">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Homepage;
