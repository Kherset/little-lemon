import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
