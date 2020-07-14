import React from 'react';

import { render } from '../../../utils/test-intl';

import Sidebar from './Sidebar';

jest.mock('gatsby');

describe('Sidebar', () => {
  it('renders list of links', () => {
    const { container } = render(<Sidebar />);

    expect(container).toHaveTextContent('See our purpose');
    expect(container).toHaveTextContent('See our approach');
  });
});
