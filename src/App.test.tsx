import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  })

  it('renders a title', () => {
    expect(screen.getByText(/Stock Budgeting App/i)).toBeInTheDocument();
  })

  it('renders a stock table', () => {
    // expect(screen)
  })
})
