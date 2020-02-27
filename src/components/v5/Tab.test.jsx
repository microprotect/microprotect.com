import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Tab from './Tab';

jest.mock('../../assets/v5');

describe('Tab', () => {
  it('renders products', () => {
    const t = {
      insurance_tab_title1: '상품안내',
      insurance_tab_title2: '보장내용',
      insurance_tab_title3: '유의사항',
    };

    render(
      <Router>
        <Tab t={t} product="carediscover" />
      </Router>,
    );

    expect(screen.getByText(/상품안내/))
      .toBeInTheDocument();
    expect(screen.getByText(/보장내용/))
      .toBeInTheDocument();
    expect(screen.getByText(/유의사항/))
      .toBeInTheDocument();
  });
});
