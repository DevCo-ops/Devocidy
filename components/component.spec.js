import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from './layout/NavBar'

test('navagation component exists', () => {
  render(<NavBar />)
  const item = screen.getByRole('button', {name: /Home/i})
  expect(item).toBeInTheDocument()
})