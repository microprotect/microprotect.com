import React from 'react';

import { render } from '../utils/test-intl';

import ProjectLayout from './ProjectLayout';

jest.mock('gatsby');
jest.mock('../assets');

describe('ProjectLayout', () => {
  it('renders title, partner and content', () => {
    const { container } = render((
      <ProjectLayout
        name="self-employed-insurance"
        title="Self-employed insurance"
        partner="Partner Korea Credit Data (KCD)"
        contents={[
          'Hello, world!',
        ]}
      />
    ));

    expect(container).toHaveTextContent('Self-employed insurance');
    expect(container).toHaveTextContent('Partner Korea Credit Data (KCD)');
    expect(container).toHaveTextContent('Hello, world!');
  });
});
