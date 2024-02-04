import { useEffect, useReducer } from "react";
import { fetchAvailableTimes } from "../services/apiService.js";

// Initial state for reducer
const initialTimesState = [];

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

// Custom hook
export const useFetchAvailableTimes = (selectedDate) => {
  // Reducer for the available times
  const [availableTimeSlots, dispatch] = useReducer(
    timesReducer,
    initialTimesState
  );

  // Use effect to fetch the available times
  useEffect(() => {
    const fetchTimes = async () => {
      try {
        // Fetch the available times
        const response = await fetchAvailableTimes(selectedDate);

        // Check if the response is successful
        if (response.status === "success") {
          // Update the available times
          dispatch({ type: "UPDATE_TIMES", payload: response.data });
        }
      } catch (error) {
        console.error("Failed to fetch times:", error);
      }
    };

    // Call the fetch times function
    fetchTimes();
  }, [selectedDate]);

  // Return the available times
  return availableTimeSlots;
};
