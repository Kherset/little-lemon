import React, { Fragment, useState } from "react";
import "./booking-form.css";

function BookingForm() {
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);
  const [guest, setGuest] = useState(null);
  const [occasion, setOccasion] = useState(null);
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

  const [availableTimes] = useState([
    "Choose time",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleDate = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    const minDate = new Date(currentDate);
    minDate.setDate(minDate.getDate());

    if (isNaN(selectedDate.getTime()) || selectedDate < minDate) {
      setErrorDate(true);
      setDate(null);
    } else {
      setErrorDate(false);
      setDate(selectedDate);
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
      alert("C'est bon");
    }
  };

  return (
    <Fragment>
      <form className="booking-form">
        <div className="form-option form-option-1">
          <label htmlFor="res-date"> Choose a date </label>
          <input
            type="date"
            id="res-date"
            onChange={handleDate}
            onBlur={handleDate}
            className="booking-form-input"
          />
          {errorDate && <p className="error-message">{errorMessages[0]}</p>}
        </div>

        <div className="form-option form-option-2">
          <label htmlFor="res-hour"> Choose a time </label>
          <select
            id="res-hour"
            onChange={handleHour}
            onBlur={handleHour}
            className="booking-form-input"
          >
            {availableTimes.map((option, index) => (
              <option key={`option-${index + 1}`}>{option}</option>
            ))}
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
            onBlur={handleGuest}
            onChange={handleGuest}
            className="booking-form-input"
          />
          {errorGuest && <p className="error-message">{errorMessages[2]}</p>}
        </div>

        <div className="form-option form-option-4">
          <label htmlFor="guests"> Occasion </label>
          <select
            id="guests"
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
              value="no preference"
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
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default BookingForm;
