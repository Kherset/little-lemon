import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the Bookingpage heading", () => {
  render(<App />);
  const headingElement = screen.getByTestId("");
  expect(headingElement).toBeInTheDocument();
});
