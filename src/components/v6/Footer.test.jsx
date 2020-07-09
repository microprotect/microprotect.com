import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders without crash', () => {
    render(<Footer />);
  });
});
