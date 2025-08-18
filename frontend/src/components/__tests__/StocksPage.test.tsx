import { render } from '@testing-library/react';
import { StocksPage } from '../StocksPage';

test('renders StocksPage', () => {
  const { getByText } = render(<StocksPage />);
  expect(getByText(/StocksPage/i)).toBeTruthy();
});