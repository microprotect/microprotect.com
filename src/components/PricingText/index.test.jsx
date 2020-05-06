import React from 'react';
import { render } from '@testing-library/react';

import PricingText from './index';

jest.mock('../../assets');

describe('Index', () => {
  it('renders options', () => {
    const { container } = render(
      <div>
        <PricingText value="(V)\n_(100%)_" />
      </div>,
    );

    expect(container).toContainHTML('<img ');
    expect(container).toContainHTML('>(100%)</small>');
  });
});
