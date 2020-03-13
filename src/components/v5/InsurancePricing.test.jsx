import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import InsurancePricing from './InsurancePricing';

jest.mock('../../assets');

describe('InsurancePricing', () => {
  it('renders labels', () => {
    const t = {};

    render(
      <Router>
        <InsurancePricing t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/기본보험료/))
      .toBeInTheDocument();
  });
});
