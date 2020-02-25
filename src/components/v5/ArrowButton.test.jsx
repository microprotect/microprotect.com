import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import ArrowButton from './ArrowButton';

jest.mock('../../assets/v5');

describe('ArrowButton', () => {
  it('renders text', () => {
    render(<ArrowButton />);

    expect(screen.getByText(/See more/))
      .toBeInTheDocument();
  });
});
