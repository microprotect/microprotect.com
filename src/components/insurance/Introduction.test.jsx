import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Introduction from './Introduction';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('Introduction', () => {
  it('renders titles', () => {
    const t = {
      insurance_information_title: '보험정보',
    };

    render(
      <Router>
        <Introduction t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/보험정보/))
      .toBeInTheDocument();
  });
});
