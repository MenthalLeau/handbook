import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/journal intime/i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders add button', () => {
  render(<App />);
  const addButton = screen.getByText(/ajoute/i);
  expect(addButton).toBeInTheDocument();
});

test ('renders edit button', () => {
  render(<App />);
  const editButton = screen.getByText(/edit/i);
  expect(editButton).toBeInTheDocument();
});

test ('renders delete button', () => {
    render(<App />);
    const deleteButton = screen.getByText(/delete/i);
    expect(deleteButton).toBeInTheDocument();
});

test ('renders title input', () => {
    render(<App />);
    const titleInput = screen.getByPlaceholderText(/title/i);
    expect(titleInput).toBeInTheDocument();
});

test ('renders content input', () => {
    render(<App />);
    const contentInput = screen.getByPlaceholderText(/content/i);
    expect(contentInput).toBeInTheDocument();
});