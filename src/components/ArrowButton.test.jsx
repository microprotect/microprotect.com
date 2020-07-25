import React from 'react';
import { render } from '@testing-library/react';

import ArrowButton from './ArrowButton';

jest.mock('../assets/v5');

describe('ArrowButton', () => {
  it('renders text', () => {
    const { container } = render((
      <ArrowButton label="See more" />
    ));

    expect(container).toHaveTextContent('See more');
  });
});
