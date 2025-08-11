import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('renders without crashing', () => {
    render(<Form />);
    expect(screen.getByText('Form Component')).toBeInTheDocument();
  });

  
  it('validates input correctly', () => {
    // Add validation tests
  });

  
});