import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

jest.mock('../../assets');

describe('Header', () => {
  it('renders logo', () => {
    const { container } = render(<Header />);

    expect(container).toHaveTextContent('Microprotect');
  });
});
