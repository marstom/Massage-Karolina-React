import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./ui/molecules/Footer";

test("renders learn react link", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Karolina/i);
  expect(linkElement).toBeInTheDocument();
});
