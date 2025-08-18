import { render } from '@testing-library/react';
import { MutualFundsPage } from '../MutualFundsPage';

test('renders MutualFundsPage', () => {
  const { getByText } = render(<MutualFundsPage />);
  expect(getByText(/MutualFundsPage/i)).toBeTruthy();
});