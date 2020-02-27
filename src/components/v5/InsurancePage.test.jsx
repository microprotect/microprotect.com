import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import InsurancePage from './InsurancePage';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('InsurancePage', () => {
  it('renders introduction', () => {
    const t = {
      insurance_information_title: '보험정보',
      insurance_pricing_title: '보험료',
      insurance_application_button: '보험 가입하기',
    };

    render(
      <Router>
        <InsurancePage t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/보험정보/))
      .toBeInTheDocument();
    expect(screen.getByText(/보험 가입하기/))
      .toBeInTheDocument();
    expect(screen.getByText(/보장 항목/))
      .toBeInTheDocument();
  });
});
