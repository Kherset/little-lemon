import { Fragment } from "react";
import "../../App.css";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import BookingForm from "../bookingform/BookingForm";
import inside from "../../img/restaurant-inside.avif";
import outside from "../../img/restaurant-outside.avif";

function Bookingpage() {
  return (
    <Fragment>
      <Nav />
      <div className="presentation-images">
        <h2 className="booking-form-title">Booking Form</h2>
        <div>
          <img src={inside} alt="restaurant indoor"></img>
          <img src={outside} alt="restaurant outdoor"></img>
        </div>
      </div>
      <BookingForm />
      <Footer />
    </Fragment>
  );
}

export default Bookingpage;
