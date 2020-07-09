import React from 'react';
import { render } from '@testing-library/react';

import Guide from './Guide';

jest.mock('../../assets');

describe('Guide', () => {
  it('renders title', () => {
    const t = {};

    const { container } = render(<Guide t={t} />);

    expect(container).toContainHTML('<img ');
  });
});
