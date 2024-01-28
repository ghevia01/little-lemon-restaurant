import Button from "../../common/Button/Button"

import "./booking-form.scss";

const BookingForm = ({ availableTimes, onDateChange }) => {
  // Handle date change
  const handleDatechange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <div className="booking-form">
      <h1 className="form-title">Book a Table</h1>
      <form className="flex flex-column">
        <div className="form-row-wrapper flex flex-row">
          <div className="form-group flex flex-column">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" />
          </div>

          <div className="form-group flex flex-column">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" />
          </div>
        </div>

        <div className="form-row-wrapper flex flex-row">
          <div className="form-group flex flex-column">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group flex flex-column">
            <label htmlFor="phoneNum">Phone number</label>
            <input type="tel" id="phoneNum" />
          </div>
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" onChange={handleDatechange} />
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time">
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="guests">Number of guests</label>
          <input type="number" min="1" id="guests" />
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <Button type="submit" variant={"secondary"}>
          Confirm Reservation
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
