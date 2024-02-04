import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";

import "./booking-form.scss";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),

  lastName: Yup.string().trim().required("Last name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNum: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),

  date: Yup.date()
    .required("Date is required")
    .min(new Date(), "Date cannot be in the past"),

  time: Yup.string().required("Time is required"),

  guests: Yup.number()
    .required("Number of guests is required")
    .min(1, "At least one guest is required")
    .integer("Number of guests must be an integer"),

  occasion: Yup.string().required("Occasion is required"),
});

const BookingForm = ({ availableTimes, onDateChange }) => {
  const navigate = useNavigate();

  // Handle date change
  const handleDateChange = (e, setFieldValue) => {
    const date = e.target.value;
    setFieldValue("date", date); // Update Formik state
    onDateChange(date); // Fetch available times
    console.log(date);
  };

  return (
    <div className="booking-form">
      <div className="form-header">
        <h1 className="form-title">Make a Reservation</h1>
        <p className="form-message">
          Please fill out the form below to reserve your table. We’ll send a
          confirmation email once your booking is successfully completed. We
          look forward to welcoming you to Little Lemon!
        </p>
      </div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form values:", values);
          navigate("/confirmed-booking");
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form flex flex-column">
            <div className="form-row-wrapper flex flex-row">
              <div className="form-group flex flex-column">
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <Field
                  className="form-field"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <ErrorMessage
                  className="error-message"
                  component="span"
                  name="firstName"
                />
              </div>

              <div className="form-group flex flex-column">
                <label className="form-label" htmlFor="lastName">
                  Last name
                </label>
                <Field
                  className="form-field"
                  type="text"
                  name="lastName"
                  id="lastName"
                />
                <ErrorMessage
                  className="error-message"
                  component="span"
                  name="lastName"
                />
              </div>
            </div>

            <div className="form-row-wrapper flex flex-row">
              <div className="form-group flex flex-column">
                <label className="form-label" htmlFor="email">
                  E-mail
                </label>
                <Field
                  className="form-field"
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  className="error-message"
                  component="span"
                  name="email"
                />
              </div>

              <div className="form-group flex flex-column">
                <label className="form-label" htmlFor="phoneNum">
                  Phone number
                </label>
                <Field
                  className="form-field"
                  type="tel"
                  name="phoneNum"
                  id="phoneNum"
                />
                <ErrorMessage
                  className="error-message"
                  component="span"
                  name="phoneNum"
                />
              </div>
            </div>

            <div className="form-group flex flex-column">
              <label className="form-label" htmlFor="date">
                Choose date
              </label>
              <Field
                className="form-field"
                type="date"
                name="date"
                id="date"
                onChange={(e) => handleDateChange(e, setFieldValue)}
              />
              <ErrorMessage
                className="error-message"
                component="span"
                name="date"
              />
            </div>

            <div className="form-group flex flex-column">
              <label className="form-label" htmlFor="time">
                Choose time
              </label>
              <Field as="select" className="form-field" name="time" id="time">
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                className="error-message"
                component="span"
                name="time"
              />
            </div>

            <div className="form-group flex flex-column">
              <label className="form-label" htmlFor="guests">
                Number of guests
              </label>
              <Field
                className="form-field"
                type="number"
                name="guests"
                id="guests"
              />
              <ErrorMessage
                className="error-message"
                component="span"
                name="guests"
              />
            </div>

            <div className="form-group flex flex-column">
              <label className="form-label" htmlFor="occasion">
                Occasion
              </label>
              <Field
                as="select"
                className="form-field"
                name="occasion"
                id="occasion"
              >
                <option value="">Select an occasion</option>
                <option>Friends</option>
                <option>Family</option>
                <option>Business</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </Field>
              <ErrorMessage
                className="error-message"
                component="span"
                name="occasion"
              />
            </div>

            <Button type="submit" variant={"secondary"}>
              Confirm Reservation
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Prop types
BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default BookingForm;
