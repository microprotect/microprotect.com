import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Pricing from './Pricing';

jest.mock('../../assets');

describe('Pricing', () => {
  it('renders labels', () => {
    const t = {};

    const { container } = render(
      <Router>
        <Pricing t={t} product="carediscover" />
      </Router>,
    );

    expect(container).toHaveTextContent('기본보험료');
  });
});
