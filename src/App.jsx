import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
