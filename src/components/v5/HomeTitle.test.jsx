import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import HomeTitle from './HomeTitle';

jest.mock('../../assets/v5');

describe('HomeTitle', () => {
  it('renders text', () => {
    render(<HomeTitle value="My HomeTitle" preValue="My PreTitle" />);

    expect(screen.getByText(/My HomeTitle/))
      .toBeInTheDocument();
    expect(screen.getByText(/My PreTitle/))
      .toBeInTheDocument();
  });
});
