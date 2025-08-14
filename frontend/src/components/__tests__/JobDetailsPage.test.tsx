import { render } from '@testing-library/react';
import { JobDetailsPage } from '../JobDetailsPage';

test('renders JobDetailsPage', () => {
  const { getByText } = render(<JobDetailsPage />);
  expect(getByText(/JobDetailsPage/i)).toBeTruthy();
});