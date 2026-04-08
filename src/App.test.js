import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the user name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/victor leung\./i);
  expect(nameElement).toBeInTheDocument();
});
