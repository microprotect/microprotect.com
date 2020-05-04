import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import AboutUsPage from './index';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('AboutPage', () => {
  it('renders name', () => {
    const t = {
      member_name1: '권상민',
    };

    const { container } = render(
      <Router>
        <AboutUsPage t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('권상민');
  });
});
