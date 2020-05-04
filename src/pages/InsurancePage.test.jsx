import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import InsurancePage from './InsurancePage';

jest.mock('../assets');
jest.mock('../assets/v5');

describe('InsurancePage', () => {
  it('renders introduction', () => {
    const t = {
      insurance_information_title: '보험정보',
    };

    const { container } = render(
      <Router>
        <InsurancePage t={t} product="carediscover" />
      </Router>,
    );

    expect(container).toHaveTextContent('보험정보');
  });
});
