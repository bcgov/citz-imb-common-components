/** @format */

import { render } from '@testing-library/react';

import UiTable from './ui-table';

describe('UiTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiTable />);
    expect(baseElement).toBeTruthy();
  });
});
