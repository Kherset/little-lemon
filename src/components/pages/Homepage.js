import Nav from "../nav/Nav";
import "../../App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Homepage;
