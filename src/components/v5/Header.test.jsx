import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

jest.mock('../../assets/v5');

describe('Header', () => {
  it('renders logo', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByText(/Microprotect/))
      .toBeInTheDocument();
  });
});
