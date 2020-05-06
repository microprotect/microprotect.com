import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Introduction from './Introduction';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('Introduction', () => {
  it('renders titles', () => {
    const t = {
      insurance_information_title: '보험정보',
    };

    const { container } = render(
      <Router>
        <Introduction t={t} product="carediscover" />
      </Router>,
    );

    expect(container).toHaveTextContent('보험정보');
  });
});
