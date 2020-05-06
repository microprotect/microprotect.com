import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Products from './Products';

jest.mock('../../assets/v5');

describe('Products', () => {
  it('renders products', () => {
    const t = {
      products_title1: '해외 의료비 보험',
    };

    const { container } = render(
      <Router>
        <Products t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('해외 의료비 보험');
  });
});
