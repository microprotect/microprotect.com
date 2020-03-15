import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Information from './Information';

jest.mock('../../assets/v5');

describe('Information', () => {
  it('renders labels', () => {
    render(
      <Router>
        <Information product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/가입연령/))
      .toBeInTheDocument();
  });
});
