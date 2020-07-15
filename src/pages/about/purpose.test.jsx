import React from 'react';

import { render } from '../../utils/test-intl';

import PurposePage from './purpose';

jest.mock('../../assets');

describe('PurposePage', () => {
  it('renders without crash', () => {
    render(<PurposePage />);
  });
});
