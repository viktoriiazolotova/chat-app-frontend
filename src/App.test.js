import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heas=der", () => {
  render(<App />);
  const linkElement = screen.getByText(/join astro talk chatroom/i);
  expect(linkElement).toBeInTheDocument();
});
