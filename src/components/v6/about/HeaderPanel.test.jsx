import React from 'react';

import { render } from '@testing-library/react';

import HeaderPanel from './HeaderPanel';

jest.mock('../../../assets');

describe('HeaderPanel', () => {
  it('renders title', () => {
    const { container } = render((
      <HeaderPanel
        image="home.background"
        title="Hello, world!"
      />
    ));

    expect(container).toHaveTextContent('Hello, world!');
  });
});
