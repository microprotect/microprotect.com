import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import PartnersPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('AboutPage', () => {
  it('renders partners', () => {
    const t = {
      partner_title_truebalance: '밸런스 히어로',
    };

    const { container } = render(
      <Router>
        <PartnersPage t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('밸런스 히어로');
  });
});
