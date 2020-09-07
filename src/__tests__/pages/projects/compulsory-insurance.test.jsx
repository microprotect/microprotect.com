import React from 'react';

import { render } from '../../../utils/test-intl';

import CompulsoryInsurancePage from '../../../pages/projects/compulsory-insurance';

jest.mock('../../../assets');

describe('CompulsoryInsurancePage', () => {
  it('renders without crash', () => {
    render(<CompulsoryInsurancePage />);
  });
});
