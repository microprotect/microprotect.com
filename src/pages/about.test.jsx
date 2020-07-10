import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './about';

jest.mock('../assets');

describe('AboutPage', () => {
  it('renders without crash', () => {
    render(<AboutPage />);
  });
});
