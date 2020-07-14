import React from 'react';

import { render } from '../../../utils/test-intl';

import Sidebar from './Sidebar';

jest.mock('../../../assets');

describe('Sidebar', () => {
  it('renders link', () => {
    const { container } = render((
      <Sidebar />
    ));

    expect(container).toContainHTML('<a href="/en/about/purpose"');
  });
});
