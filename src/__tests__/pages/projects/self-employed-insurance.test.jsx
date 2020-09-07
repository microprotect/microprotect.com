import React from 'react';

import { render } from '../../../utils/test-intl';

import SelfEmployedInsurancePage from '../../../pages/projects/self-employed-insurance';

jest.mock('../../../assets');

describe('SelfEmployedInsurancePage', () => {
  it('renders without crash', () => {
    render(<SelfEmployedInsurancePage />);
  });
});
