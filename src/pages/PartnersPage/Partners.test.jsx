import React from 'react';
import { render } from '@testing-library/react';

import Partners from './Partners';

describe('Partners', () => {
  it('renders partners', () => {
    const t = {
      partner_title_truebalance: 'Balance Hero',
    };

    const { container } = render(
      <Partners t={t} />,
    );
    expect(container).toHaveTextContent('Balance Hero');
  });
});
