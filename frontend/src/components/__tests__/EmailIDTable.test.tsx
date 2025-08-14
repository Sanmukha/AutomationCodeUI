import { render } from '@testing-library/react';
import { EmailIDTable } from '../EmailIDTable';

test('renders EmailIDTable', () => {
  const { getByText } = render(<EmailIDTable />);
  expect(getByText(/EmailIDTable/i)).toBeTruthy();
});