import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('Home', () => {
  it('renders slogan', () => {
    const t = {
      v5_slogan1: 'Slogan',
    };

    const { container } = render(
      <Router>
        <HomePage t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('Slogan');
  });
});
