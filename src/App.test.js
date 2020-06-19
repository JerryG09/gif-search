import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Gif Search/i);
  expect(linkElement).toBeInTheDocument();
});
