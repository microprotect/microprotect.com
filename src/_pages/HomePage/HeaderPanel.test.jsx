import React from 'react';
import { render } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../assets/v5');

describe('HeaderPanel', () => {
  it('renders slogan', () => {
    const t = {
      v5_slogan1: '당신이 보호받으면 세상도 함께 보호받습니다',
    };

    const { container } = render(<HeaderPanel t={t} />);

    expect(container).toHaveTextContent('당신이 보호받으면 세상도 함께 보호받습니다');
  });
});
