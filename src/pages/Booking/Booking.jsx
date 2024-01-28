import React, { useReducer } from "react";
import Header from "../../components/layout/Header/Header";
import BookingForm from "../../components/layout/BookingForm/BookingForm";

import "./booking.scss";

// Initial state for the available times reducer
const initialTimesState = ["10:00", "12:00", "14:00", "16:00"];

// Reducer function for the available times
function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state };
    default:
      return state;
  }
}

function Booking() {
  // Reducer for the available times
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    initialTimesState,
  );

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        OnDateChange={(newDate) =>
          dispatch({ type: "UPDATE_TIMES", payload: newDate })
        }
      />
    </>
  );
}

export default Booking;
