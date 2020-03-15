import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../assets/v5');

describe('HeaderPanel', () => {
  it('renders titles', () => {
    const t = {
      insurance_title_carediscover: '해외 의료비 보험',
    };

    render(<HeaderPanel t={t} product="carediscover" />);

    expect(screen.getByText(/해외 의료비 보험/))
      .toBeInTheDocument();
  });
});
