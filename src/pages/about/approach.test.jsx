import React from 'react';

import { render } from '../../utils/test-intl';

import ApproachPage from './approach';

jest.mock('../../assets');

describe('ApproachPage', () => {
  it('renders without crash', () => {
    render(<ApproachPage />);
  });
});
