import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

jest.mock('../../assets/v5');

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />);

    expect(screen.getByText(/Microprotect/))
      .toBeInTheDocument();
  });
});
