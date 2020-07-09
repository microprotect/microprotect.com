import React from 'react';

import { render } from '@testing-library/react';

import Content from './Content';

describe('Content', () => {
  it('renders children', () => {
    const { container } = render((
      <Content>
        <p>Hello, world!</p>
      </Content>
    ));

    expect(container).toHaveTextContent('Hello, world!');
  });
});
