import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import ApplicationHeaderPanel from './ApplicationHeaderPanel';

jest.mock('../../assets/v5');

describe('ApplicationHeaderPanel', () => {
  it('renders texts', () => {
    const t = {
      application_title_carediscover: '해외 의료비 보험 가입',
    };

    render(<ApplicationHeaderPanel t={t} product="carediscover" />);

    expect(screen.getByText(/해외 의료비 보험 가입/))
      .toBeInTheDocument();
  });
});
