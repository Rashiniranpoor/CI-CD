import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const title = screen.getByText("Hello world!");
    expect(title).toBeInTheDocument();
  });
});