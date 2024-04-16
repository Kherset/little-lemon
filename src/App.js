import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <div className="header-and-nav">
        <Header />
      </div>

      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
