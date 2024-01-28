import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("renders without crashing", () => {
    const availableTimes = ["12:00", "13:00", "14:00"];
    render(
      <BookingForm availableTimes={availableTimes} onDateChange={() => {}} />
    );

    expect(screen.getByText("Book a Table")).toBeInTheDocument();
  });
});
