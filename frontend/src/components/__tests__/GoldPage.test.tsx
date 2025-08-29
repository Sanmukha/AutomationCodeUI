import { render } from '@testing-library/react';
import { GoldPage } from '../GoldPage';

test('renders GoldPage', () => {
  const { getByText } = render(<GoldPage />);
  expect(getByText(/GoldPage/i)).toBeTruthy();
});