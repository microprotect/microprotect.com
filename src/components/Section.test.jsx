import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import Section from './Section';

jest.mock('../assets/v5');

describe('Section', () => {
  it('renders children', () => {
    render(
      <Section>
        <p>Hi!</p>
      </Section>,
    );

    expect(screen.getByText(/Hi/))
      .toBeInTheDocument();
  });
});
