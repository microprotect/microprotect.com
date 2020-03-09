import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import InsurancePricing from './InsurancePricing';

jest.mock('../../assets');

describe('InsurancePricing', () => {
  it('renders labels', () => {
    const t = {};

    render(<InsurancePricing t={t} product="carediscover" />);

    expect(screen.getByText(/기본보험료/))
      .toBeInTheDocument();
  });
});
