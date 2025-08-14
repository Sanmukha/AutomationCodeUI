import { render } from '@testing-library/react';
import { EmailIDPage } from '../EmailIDPage';

test('renders EmailIDPage', () => {
  const { getByText } = render(<EmailIDPage />);
  expect(getByText(/EmailIDPage/i)).toBeTruthy();
});