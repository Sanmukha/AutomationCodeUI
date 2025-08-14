import { render } from '@testing-library/react';
import { LocationsPage } from '../LocationsPage';

test('renders LocationsPage', () => {
  const { getByText } = render(<LocationsPage />);
  expect(getByText(/LocationsPage/i)).toBeTruthy();
});