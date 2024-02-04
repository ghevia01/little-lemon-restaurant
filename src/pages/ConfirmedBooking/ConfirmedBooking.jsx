import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import "./confirmed-booking.scss";

function ConfirmedBooking() {
  return (
    <>
      <Header />
      <main className="confirmation-section">
        <h1>Booking Confirmed!</h1>
        <p>Your reservation has been successfully made.</p>
        <p>We look forward to seeing you soon!</p>
      </main>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
