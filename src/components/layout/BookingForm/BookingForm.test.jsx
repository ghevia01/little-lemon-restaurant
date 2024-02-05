import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

// Mock the useNavigate hook from react-router-dom (the form uses it to navigate to the confirmation page)
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

// Mock available times and onDateChange function
const availableTimesMock = ["12:00", "12:30", "13:00", "13:30", "14:00"];
const onDateChangeMock = vi.fn();

const renderBookingForm = () => {
  render(
    <BookingForm
      availableTimes={availableTimesMock}
      onDateChange={onDateChangeMock}
    />
  );
};

describe("BookingForm", () => {
  beforeEach(() => {
    renderBookingForm();
  });

  it("renders without crashing", () => {
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
  });

  it("submits form with valid inputs", async () => {
    // Fill the form with valid inputs
    userEvent.type(screen.getByLabelText(/First name/), "John");
    userEvent.type(screen.getByLabelText(/Last name/), "Doe");
    userEvent.type(screen.getByLabelText(/E-mail/), "john.doe@example.com");
    userEvent.type(screen.getByLabelText(/Phone number/), "7874567890");

    // Find the date input and simulate a change
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2021-10-01" } });

    // Check that the onDateChange function was called
    expect(onDateChangeMock).toHaveBeenCalledWith("2021-10-01");

    userEvent.selectOptions(screen.getByLabelText(/Choose time/), ["12:00"]);
    userEvent.type(screen.getByLabelText(/Number of guests/), "4");
    userEvent.selectOptions(screen.getByLabelText(/Occasion/), ["Birthday"]);

    // Submit the form
    await userEvent.click(
      screen.getByRole("button", { name: /Confirm Reservation/ })
    );
  });
});
