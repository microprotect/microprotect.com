import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import InsuranceIntroduction from './InsuranceIntroduction';

jest.mock('../../assets/v5');

describe('InsuranceIntroduction', () => {
  it('renders titles', () => {
    const t = {
      insurance_information_title: '보험정보',
    };

    render(
      <Router>
        <InsuranceIntroduction t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/보험정보/))
      .toBeInTheDocument();
  });
});
