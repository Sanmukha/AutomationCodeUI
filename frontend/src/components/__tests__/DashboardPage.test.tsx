import { render } from '@testing-library/react';
import { DashboardPage } from '../DashboardPage';

test('renders DashboardPage', () => {
  const { getByText } = render(<DashboardPage />);
  expect(getByText(/DashboardPage/i)).toBeTruthy();
});