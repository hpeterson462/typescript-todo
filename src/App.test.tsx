import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders Todo List', () => {
    render(<App />);
    const todoElement = screen.getByText(/todo list/i);
    expect(todoElement).toBeInTheDocument();
  });

  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })
});
