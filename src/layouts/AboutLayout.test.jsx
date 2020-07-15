import React from 'react';

import { render } from '../utils/test-intl';

import AboutLayout from './AboutLayout';

jest.mock('gatsby');
jest.mock('../assets');

describe('AboutLayout', () => {
  it('renders title and contents', () => {
    const { container } = render((
      <AboutLayout
        title="Greeting"
        contents={[
          'Hello, world!',
        ]}
      />
    ));

    expect(container).toHaveTextContent('Greeting');
    expect(container).toHaveTextContent('Hello, world!');
  });
});
