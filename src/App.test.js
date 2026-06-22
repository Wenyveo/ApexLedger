// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApexLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApexLedger/i);
    expect(titleElement).toBeInTheDocument();
});
