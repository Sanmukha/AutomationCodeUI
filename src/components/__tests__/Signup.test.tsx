import React from 'react';
import { render, screen } from '@testing-library/react';
import { Signup } from './Signup';

describe('Signup', () => {
  it('renders without crashing', () => {
    render(<Signup />);
    expect(screen.getByText('Signup Component')).toBeInTheDocument();
  });

  
  it('validates input correctly', () => {
    // Add validation tests
  });

  
});