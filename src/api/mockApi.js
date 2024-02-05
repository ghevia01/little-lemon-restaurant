export const getRandomTimeSlots = (date) => {
  const timeSlots = [];
  const openingHour = 8; // 8 AM
  const closingHour = 20; // 8 PM
  const intervalMinutes = 30; // Interval of 30 minutes between slots

  for (let hour = openingHour; hour < closingHour; hour++) {
    // Generate time slots based on the interval
    for (let minute = 0; minute < 60; minute += intervalMinutes) {
      const hourString = hour < 10 ? `0${hour}` : `${hour}`;
      const minuteString = minute < 10 ? `0${minute}` : `${minute}`;
      timeSlots.push(`${hourString}:${minuteString}`);
    }
  }

  // Randomly select a number of slots to return
  const numberOfSlots = Math.floor(Math.random() * (timeSlots.length / 2)) + 1;
  let selectedTimeSlots = timeSlots
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfSlots);

     // Sort the selected time slots in ascending order
  selectedTimeSlots = selectedTimeSlots.sort((a, b) => {
    // Convert time strings to Date objects for comparison
    const timeA = new Date(`1970-01-01T${a}:00`);
    const timeB = new Date(`1970-01-01T${b}:00`);
    return timeA - timeB;
  });

  // Simulate an API response
  return {
    status: "success",
    data: selectedTimeSlots,
    message: "Available time slots retrieved successfully.",
  };
};
