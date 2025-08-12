import { render } from '@testing-library/react';
import { Interaction } from '../Interaction';

test('renders Interaction', () => {
  const { getByText } = render(<Interaction />);
  expect(getByText(/Interaction/i)).toBeTruthy();
});