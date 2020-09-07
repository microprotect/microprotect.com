import React from 'react';

import { render } from '../../../utils/test-intl';

import CreditDefaultInsurancePage from '../../../pages/projects/credit-default-insurance';

jest.mock('../../../assets');

describe('CreditDefaultInsurancePage', () => {
  it('renders without crash', () => {
    render(<CreditDefaultInsurancePage />);
  });
});
