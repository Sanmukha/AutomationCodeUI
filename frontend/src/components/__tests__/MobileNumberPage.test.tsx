import { render } from '@testing-library/react';
import { MobileNumberPage } from '../MobileNumberPage';

test('renders MobileNumberPage', () => {
  const { getByText } = render(<MobileNumberPage />);
  expect(getByText(/MobileNumberPage/i)).toBeTruthy();
});