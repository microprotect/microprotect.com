import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import InsuranceCoverage from './InsuranceCoverage';

describe('InsuranceCoverage', () => {
  it('renders labels', () => {
    render(<InsuranceCoverage product="carediscover" />);

    expect(screen.getByText(/보장 항목/))
      .toBeInTheDocument();
  });
});
