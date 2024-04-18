import { Fragment } from "react";
import "../../App.css";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

function Homepage() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Homepage;
