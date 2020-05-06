import React from 'react';
import { render } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../assets/v5');

describe('HeaderPanel', () => {
  it('renders titles', () => {
    const t = {
      insurance_title_carediscover: '해외 의료비 보험',
    };

    const { container } = render(<HeaderPanel t={t} product="carediscover" />);

    expect(container).toHaveTextContent('해외 의료비 보험');
  });
});
