import React from 'react';

import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  it('renders children', () => {
    const { container } = render((
      <Container>
        <p>Hello, world!</p>
      </Container>
    ));

    expect(container).toHaveTextContent('Hello, world!');
  });
});
