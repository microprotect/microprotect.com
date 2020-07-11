import React from 'react';

import { render } from '@testing-library/react';

import HomeLayout from './HomeLayout';

jest.mock('gatsby');
jest.mock('../assets');

describe('HomeLayout', () => {
  it('renders content', () => {
    const { container } = render((
      <HomeLayout>
        <p>Hello, World!</p>
      </HomeLayout>
    ));

    expect(container).toHaveTextContent('Hello, World!');
  });
});
