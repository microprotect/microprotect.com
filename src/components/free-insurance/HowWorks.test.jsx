import React from 'react';
import { render } from '@testing-library/react';

import HowWorks from './HowWorks';

jest.mock('../../assets/v4');

describe('HowWorks', () => {
  it('renders partners', () => {
    const t = {
      how_works1: 'Donation',
      how_works2: 'Profit',
      how_works3: 'Microprotect',
      how_works4: 'Free Insurance',
    };

    const { container } = render(<HowWorks t={t} />);

    expect(container).toHaveTextContent('Donation');
    expect(container).toHaveTextContent('Profit');
    expect(container).toHaveTextContent('Microprotect');
    expect(container).toHaveTextContent('Free Insurance');
  });
});
