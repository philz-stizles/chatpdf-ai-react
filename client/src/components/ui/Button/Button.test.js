import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders learn react link", () => {
    const label = "Save"
  render(<Button label={label} />);
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});
