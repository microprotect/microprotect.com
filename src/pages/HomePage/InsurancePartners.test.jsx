import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import InsurancePartners from './InsurancePartners';

jest.mock('../../assets/v5');

describe('InsurancePartners', () => {
  it('renders description of partner', () => {
    const t = {
      insurance_partners_description_allianz: 'Allianz는 독일의 보험',
    };

    render(<InsurancePartners t={t} />);

    expect(screen.getByText(/Allianz는 독일의 보험/))
      .toBeInTheDocument();
  });
});
