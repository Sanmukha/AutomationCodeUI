import { render } from '@testing-library/react';
import { DashboardTable } from '../DashboardTable';

test('renders DashboardTable', () => {
  const { getByText } = render(<DashboardTable />);
  expect(getByText(/DashboardTable/i)).toBeTruthy();
});