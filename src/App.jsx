import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
