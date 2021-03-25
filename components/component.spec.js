import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from '../components/layout'

test('navagation component exists', () => {
  render(<NavBar />)
  const item = screen.getByText(/devocidy/i)
  expect(item).toBe('devocidy')
})