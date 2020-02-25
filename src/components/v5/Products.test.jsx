import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Products from './Products';

jest.mock('../../assets/v5');

describe('Products', () => {
  it('renders products', () => {
    const t = {
      products_title1: '해외 의료비 보험',
    };

    render(
      <Router>
        <Products t={t} />
      </Router>,
    );

    expect(screen.getByText(/해외 의료비 보험/))
      .toBeInTheDocument();
  });
});
