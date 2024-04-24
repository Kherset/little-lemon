import React, { Fragment, useState } from "react";
import "./booking-form.css";
import inside from "../../img/restaurant-inside.avif";
import outside from "../../img/restaurant-outside.avif";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preference, setPreference] = useState("no preference");

  const [errorGuest, setErrorGuest] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorHour, setErrorHour] = useState(false);
  const [errorOccasion, setErrorOccasion] = useState(false);

  const errorMessages = [
    "You must choose a date.",
    "You must choose a time.",
    "You must select the number of guests.",
    "You must select an option.",
    "You must select a preference.",
  ];

  // Prevent the user from selecting a date equal to or earlier than today's date.
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const minDate = currentDate.toISOString().split("T")[0];

  const handleDate = (e) => {
    if (!e || e < minDate) {
      setErrorDate(true);
      setDate(null);
    } else {
      setErrorDate(false);
      setDate(e);
      props.dispatch(e);
    }
  };

  const handleValidation = (value, setError) => {
    if (
      value === "" ||
      value === "Choose time" ||
      value === "Select an occasion"
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleHour = (e) => {
    const selectedHour = e.target.value;
    if (selectedHour < 1 || selectedHour > 10) {
      setErrorGuest(true);
    }
    handleValidation(selectedHour, setErrorHour);
    setHour(selectedHour);
  };

  const handleGuest = (e) => {
    const selectedGuest = e.target.value;
    handleValidation(selectedGuest, setErrorGuest);
    setGuest(selectedGuest);
  };

  const handleOccasion = (e) => {
    const selectedOccasion = e.target.value;
    handleValidation(selectedOccasion, setErrorOccasion);
    setOccasion(selectedOccasion);
  };

  const handlePreference = (e) => {
    const selectedPreference = e.target.value;
    setPreference(selectedPreference);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleValidation(date, setErrorDate);
    handleValidation(hour, setErrorHour);
    handleValidation(guest, setErrorGuest);
    handleValidation(occasion, setErrorOccasion);
    setErrorDate(!date);
    setErrorHour(!hour);
    setErrorGuest(!guest);
    setErrorOccasion(!occasion);

    if (date && hour && guest && occasion && preference) {
      props.submitForm(e);
    }
  };

  return (
    <Fragment>
      <div className="presentation-images">
        <h2 className="booking-form-title">Booking Form</h2>
        <div className="form-img-container">
          <img src={inside} alt="restaurant indoor"></img>
          <img src={outside} alt="restaurant outdoor"></img>
        </div>
      </div>
      <form className="booking-form">
        <div className="form-option form-option-1">
          <label htmlFor="res-date"> Choose a date </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => handleDate(e.target.value)}
            onBlur={(e) => handleDate(e.target.value)}
            min={minDate}
            className="booking-form-input"
          />
          {errorDate && <p className="error-message">{errorMessages[0]}</p>}
        </div>

        <div className="form-option form-option-2">
          <label htmlFor="res-hour"> Choose a time </label>
          <select
            id="res-hour"
            value={hour}
            onChange={handleHour}
            onBlur={handleHour}
            className="booking-form-input"
          >
            {props.availableTimes.availableTimes.map((availableTimes) => {
              return <option key={availableTimes}>{availableTimes}</option>;
            })}
          </select>
          {errorHour && <p className="error-message">{errorMessages[1]}</p>}
        </div>

        <div className="form-option form-option-3">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="Select numbers of guests"
            min="1"
            max="10"
            id="guests"
            value={guest}
            onBlur={handleGuest}
            onChange={handleGuest}
            className="booking-form-input"
          />
          {errorGuest && <p className="error-message">{errorMessages[2]}</p>}
        </div>

        <div className="form-option form-option-4">
          <label htmlFor="occasion"> Occasion </label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasion}
            onBlur={handleOccasion}
            className="booking-form-input"
          >
            <option>Select an occasion</option>
            <option>No occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errorOccasion && <p className="error-message">{errorMessages[3]}</p>}
        </div>

        <div className="form-option form-option-5">
          <label>Seated options :</label>
          <label htmlFor="no-preference">
            <input
              type="radio"
              name="location"
              value={preference}
              checked={preference === "no preference"}
              onChange={handlePreference}
              className="booking-form-input"
            />
            No preference
          </label>
          <label>
            <input
              type="radio"
              name="location"
              value="inside"
              checked={preference === "inside"}
              onChange={handlePreference}
              className="booking-form-input"
            />
            Inside
          </label>
          <label>
            <input
              type="radio"
              name="location"
              value="outside"
              checked={preference === "outside"}
              onChange={handlePreference}
            />
            Outside
          </label>
        </div>

        <div className="form-option form-option-6">
          <input
            type="submit"
            value="envoyer"
            className="submit-button"
            aria-label="On Click"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default BookingForm;
