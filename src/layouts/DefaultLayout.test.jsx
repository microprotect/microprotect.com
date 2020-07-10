import React from 'react';

import { render } from '@testing-library/react';

import DefaultLayout from './DefaultLayout';

jest.mock('gatsby');
jest.mock('../assets');

describe('DefaultLayout', () => {
  it('renders content', () => {
    const { container } = render((
      <DefaultLayout>
        <p>Hello, World!</p>
      </DefaultLayout>
    ));

    expect(container).toHaveTextContent('Hello, World!');
  });
});
