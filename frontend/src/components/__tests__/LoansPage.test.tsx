import { render } from '@testing-library/react';
import { LoansPage } from '../LoansPage';

test('renders LoansPage', () => {
  const { getByText } = render(<LoansPage />);
  expect(getByText(/LoansPage/i)).toBeTruthy();
});