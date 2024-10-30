import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {act} from 'react';

const startTest = () => {
    const SetPassword = screen.getByPlaceholderText('password')
    const passwordButton = screen.getByText(/Set the password/i);
    fireEvent.change(SetPassword, { target: { value : "laclesecrete"}})
    act(() => {
        passwordButton.click()
    })
    const fieldTitle = screen.getByPlaceholderText('title')
    const fieldContent = screen.getByPlaceholderText('content')
    const addButton = screen.getByText(/ajoute/i);
    fireEvent.change(fieldTitle, { target: { value : "Oui"}})
    fireEvent.change(fieldContent, { target: { value : "Non"}})
    act(() => {
        addButton.click()
    })
}

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/journal intime/i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders add button', () => {
  render(<App />);
    const SetPassword = screen.getByPlaceholderText('password')
    const passwordButton = screen.getByText(/Set the password/i);
    fireEvent.change(SetPassword, { target: { value : "laclesecrete"}})
    act(() => {
        passwordButton.click()
    })
  const addButton = screen.getByText(/ajoute/i);
  expect(addButton).toBeInTheDocument();
});

test ('add element and test if edit and delete button exists', () => {
  render(<App />)
    startTest()
  const editButton = screen.getByText(/edit/i);
  const deleteButton = screen.getByText(/delete/i);
  expect(editButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
})

test ('renders title input', () => {
    render(<App />);
    startTest()
    const titleInput = screen.getByPlaceholderText(/title/i);
    expect(titleInput).toBeInTheDocument();
});

test ('renders content input', () => {
    render(<App />);
    startTest()
    const contentInput = screen.getByPlaceholderText(/content/i);
    expect(contentInput).toBeInTheDocument();
});

test ('edit button work', () => {
    render(<App />);
    startTest()
    const fieldTitle = screen.getByPlaceholderText('title')
    const fieldContent = screen.getByPlaceholderText('content')
    fireEvent.change(fieldTitle, { target: { value : "Non"}})
    fireEvent.change(fieldContent, { target: { value : "Oui"}})

    const editButton = screen.getByText(/edit/i);
    act(() => {
        editButton.click();
    });
})

test ('delete button work', () => {
    render(<App />);
    startTest()
    const deleteButton = screen.getByText(/delete/i);
    act(() => {
        deleteButton.click();
    });
})

test ('view button work', () => {
    render(<App />);
    startTest()
    const viewButton = screen.getByText(/view/i);
    act(() => {
        viewButton.click();
    });
})