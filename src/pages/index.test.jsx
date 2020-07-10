import React from 'react';

import { render } from '@testing-library/react';

import IndexPage from './index';

jest.mock('../assets');

describe('IndexPage', () => {
  it('renders without crash', () => {
    render(<IndexPage />);
  });
});
