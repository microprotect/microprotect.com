import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

jest.mock('../assets/v5');

describe('Header', () => {
  it('renders logo', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(container).toHaveTextContent('Microprotect');
  });
});
