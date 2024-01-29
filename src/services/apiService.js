import { getRandomTimeSlots } from "../api/mockApi";

// This is a mock API service. It returns a promise that resolves to an array of time slots.
export const fetchAvailableTimes = async (date) => {
  const response = await getRandomTimeSlots(date);

  // Check if the response is successful
  if (response.status === "success") {
    return {
      status: "success",
      data: response.data,
      message: response.message,
    };
  } else {
    throw new Error(response.message);
  }
};
