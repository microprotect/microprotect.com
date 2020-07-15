import React from 'react';

import { render } from '../../utils/test-intl';

import CompulsoryInsurancePage from './compulsory-insurance';

jest.mock('../../assets');

describe('CompulsoryInsurancePage', () => {
  it('renders without crash', () => {
    render(<CompulsoryInsurancePage />);
  });
});
