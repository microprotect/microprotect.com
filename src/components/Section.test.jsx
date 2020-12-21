import React from 'react';
import { render } from '@testing-library/react';

import Section from './Section';

jest.mock('../assets/v5');

describe('Section', () => {
  it('renders children', () => {
    const { container } = render(
      <Section>
        <p>Hi!</p>
      </Section>,
    );

    expect(container).toHaveTextContent('Hi');
  });
});
