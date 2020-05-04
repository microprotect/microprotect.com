import React from 'react';
import { render } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

describe('HeaderPanel', () => {
  it('renders <div> tag', () => {
    const { container } = render(<HeaderPanel />);

    expect(container).toContainHTML('<div');
  });
});
