import { render } from '@testing-library/react';
import { BranchWithStoryNumberAndCreatePullRequestToDevelopTable } from '../BranchWithStoryNumberAndCreatePullRequestToDevelopTable';

test('renders BranchWithStoryNumberAndCreatePullRequestToDevelopTable', () => {
  const { getByText } = render(<BranchWithStoryNumberAndCreatePullRequestToDevelopTable />);
  expect(getByText(/BranchWithStoryNumberAndCreatePullRequestToDevelopTable/i)).toBeTruthy();
});