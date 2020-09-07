import React from 'react';

import { render } from '../../utils/test-intl';

import GermanyPage from '../../pages/germany';

jest.mock('../../assets');

describe('GermanyPage', () => {
  it('renders without crash', () => {
    render(<GermanyPage />);
  });
});
