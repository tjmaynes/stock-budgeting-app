import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a title', () => {
  render(<App />);
  expect(screen.getByText(/Stock Budgeting App/i)).toBeInTheDocument();
});
