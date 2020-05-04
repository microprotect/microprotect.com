import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

jest.mock('../../assets/v5');

describe('Title', () => {
  it('renders text', () => {
    const { container } = render(
      <Title value="My HomeTitle" preValue="My PreTitle" />,
    );

    expect(container).toHaveTextContent('My HomeTitle');
    expect(container).toHaveTextContent('My PreTitle');
  });
});
