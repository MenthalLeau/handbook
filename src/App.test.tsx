import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {act} from 'react';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/journal intime/i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders add button', () => {
  render(<App />);
  const addButton = screen.getByText(/ajoute/i);
  expect(addButton).toBeInTheDocument();
});

test ('add element and test if edit and delete button exists', () => {
  render(<App />)
  const fieldTitle = screen.getByPlaceholderText('title')
  const fieldContent = screen.getByPlaceholderText('content')
  const addButton = screen.getByText(/ajoute/i);
  fireEvent.change(fieldTitle, { target: { value : "Oui"}})
  fireEvent.change(fieldContent, { target: { value : "Non"}})
  act(() => {
    addButton.click()
  })
  const editButton = screen.getByText(/edit/i);
  const deleteButton = screen.getByText(/delete/i);
  expect(fieldTitle).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
})

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
