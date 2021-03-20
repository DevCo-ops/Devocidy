import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/index";

test("should render home", () => {
  const { getByText } = render(<Home />);

  expect(getByText(/Create Next App/i)).not.toBeNull();
});

test("Jest runner works", () => {
  expect(jest).toBeDefined();
  expect(process.env.JEST_WORKER_ID).toBeDefined();
});
