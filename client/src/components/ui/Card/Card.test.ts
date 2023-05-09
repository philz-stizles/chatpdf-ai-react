import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders learn react link", () => {
  const label = "Save";
  // render(<Card />);
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});
