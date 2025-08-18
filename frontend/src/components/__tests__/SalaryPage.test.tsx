import { render } from '@testing-library/react';
import { SalaryPage } from '../SalaryPage';

test('renders SalaryPage', () => {
  const { getByText } = render(<SalaryPage />);
  expect(getByText(/SalaryPage/i)).toBeTruthy();
});