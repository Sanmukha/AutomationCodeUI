import React from 'react';
import { render, screen } from '@testing-library/react';
import with from './with';

describe('with Bug Fix Tests', () => {
  it('should fix the reported bug', () => {
    render(<with />);
    
    // Test for bug fix: Create new react project from scratch
    expect(screen.getByText(/fixed/i)).toBeInTheDocument();
  });
  
  it('should handle validation correctly', () => {
    render(<with />);
    
    // Specific test for validation
    expect(screen.getByText(/issue resolved/i)).toBeInTheDocument();
  });
});