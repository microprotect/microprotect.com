import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Pricing from './Pricing';

jest.mock('../../assets');

describe('Pricing', () => {
  it('renders labels', () => {
    const t = {};

    render(
      <Router>
        <Pricing t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/기본보험료/))
      .toBeInTheDocument();
  });
});
