import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from './Title';

jest.mock('../../assets/v5');

describe('Title', () => {
  it('renders text', () => {
    render(<Title value="My HomeTitle" preValue="My PreTitle" />);

    expect(screen.getByText(/My HomeTitle/)).toBeInTheDocument();
    expect(screen.getByText(/My PreTitle/)).toBeInTheDocument();
  });
});
