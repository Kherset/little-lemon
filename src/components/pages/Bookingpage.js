import React from "react";
import "../../App.css";
import BookingForm from "../bookingform/BookingForm";

const Bookingpage = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Bookingpage;
