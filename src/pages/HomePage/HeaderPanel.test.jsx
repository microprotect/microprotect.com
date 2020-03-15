import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../assets/v5');

describe('HeaderPanel', () => {
  it('renders slogan', () => {
    const t = {
      v5_slogan1: '당신이 보호받으면 세상도 함께 보호받습니다',
    };

    render(<HeaderPanel t={t} />);

    expect(screen.getByText(/당신이 보호받으면 세상도 함께 보호받습니다/))
      .toBeInTheDocument();
  });
});
