import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import InsuranceHeaderPanel from './InsuranceHeaderPanel';

jest.mock('../../assets/v5');

describe('InsuranceHeaderPanel', () => {
  it('renders titles', () => {
    const t = {
      insurance_title_carediscover: '해외 의료비 보험',
    };

    render(<InsuranceHeaderPanel t={t} product="carediscover" />);

    expect(screen.getByText(/해외 의료비 보험/))
      .toBeInTheDocument();
  });
});
