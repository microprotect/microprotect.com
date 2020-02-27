import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import InsuranceNotice from './InsuranceNotice';

describe('InsuranceNotice', () => {
  const t = {
    insurance_notice_note: '* 세부내용은 약관을 참조해주시기 바랍니다.',
  };

  it('renders title', () => {
    render(<InsuranceNotice t={t} product="carediscover" />);

    expect(screen.getByText(/보장하지 않는 손해/))
      .toBeInTheDocument();
    expect(screen.getByText(/세부내용은 약관을 참조해주시기 바랍니다./))
      .toBeInTheDocument();
  });
});
