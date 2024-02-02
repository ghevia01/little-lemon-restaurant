// Booking.js
import { useState } from "react";
import { useFetchAvailableTimes } from "../../hooks/fetchData.js";

import SectionWrapper from "../../components/layout/SectionWrapper/SectionWrapper";
import Header from "../../components/layout/Header/Header";
import BookingForm from "../../components/layout/BookingForm/BookingForm";
import Footer from "../../components/layout/Footer/Footer";
import "./booking.scss";

// Get current date
const currentDate = new Date();

function Booking() {
  // State for selected date
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Fetch available times for selected date
  const availableTimeSlots = useFetchAvailableTimes(selectedDate);

  // Handle date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <>
      <Header />
      <main>
        <SectionWrapper className="booking">
          <BookingForm
            availableTimes={availableTimeSlots}
            onDateChange={handleDateChange}
          />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export default Booking;
