import React from 'react';
import { render } from '@testing-library/react';

import Information from './Information';

jest.mock('../../assets');

describe('Information', () => {
  it('renders title', () => {
    const t = {
      myfriend_description: '마이프렌드',
    };

    const { container } = render(<Information t={t} />);

    expect(container).toHaveTextContent('마이프렌드');
  });
});
