import React from 'react';
import { render } from '@testing-library/react';

import InsurancePartners from './InsurancePartners';

jest.mock('../../assets/v5');

describe('InsurancePartners', () => {
  it('renders description of partner', () => {
    const t = {
      insurance_partners_description_allianz: 'Allianz는 독일의 보험',
    };

    const { container } = render(<InsurancePartners t={t} />);

    expect(container).toHaveTextContent('Allianz는 독일의 보험');
  });
});
