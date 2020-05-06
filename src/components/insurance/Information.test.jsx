import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Information from './Information';

jest.mock('../../assets/v5');

describe('Information', () => {
  it('renders labels', () => {
    const { container } = render(
      <Router>
        <Information product="carediscover" />
      </Router>,
    );

    expect(container).toHaveTextContent('가입연령');
  });
});
