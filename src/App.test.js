import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe.only("App", () => {
  test("should watch input correctly", () => {
    const { getByTestId } = render(<App />);
    fireEvent.input(getByTestId("queryName"), {
      target: {
        value: "test",
      },
    });
    expect(getByTestId("message").innerHTML).toEqual("");
  });

  test("should display correct error message", () => {
    const { getByTestId, findByText } = render(<App />);
    getByTestId("submit");
    fireEvent.click(getByTestId("submit"));
    findByText("This field is required");
  });
});
