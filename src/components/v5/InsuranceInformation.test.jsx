import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import InsuranceInformation from './InsuranceInformation';

jest.mock('../../assets/v5');

describe('InsuranceInformation', () => {
  it('renders labels', () => {
    render(
      <Router>
        <InsuranceInformation product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/가입연령/))
      .toBeInTheDocument();
  });
});
