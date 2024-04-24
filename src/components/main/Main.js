import { Route, Routes, useNavigate } from "react-router-dom";
import "./main.css";
import { useReducer } from "react";
import Bookingpage from "../pages/Bookingpage";
import Specializations from "../specializations/Specializations";
import Header from "../header/Header";
import ConfirmedBooking from "../confirmedBooking/ConfirmedBooking";

function Main() {
  //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
    result.push("Choose time");
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main className="main" id="main">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/booking"
          element={
            <Bookingpage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Specializations />
    </main>
  );
}

export default Main;
