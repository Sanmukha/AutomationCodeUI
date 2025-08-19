import { render } from '@testing-library/react';
import { ProjectFolderTable } from '../ProjectFolderTable';

test('renders ProjectFolderTable', () => {
  const { getByText } = render(<ProjectFolderTable />);
  expect(getByText(/ProjectFolderTable/i)).toBeTruthy();
});