import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
