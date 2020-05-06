import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import FreeInsurancePage from './FreeInsurancePage';

jest.mock('../assets');
jest.mock('../assets/v4');
jest.mock('../assets/v5');

describe('FreeInsurancePage', () => {
  it('renders title', () => {
    const t = {
      donation_title: '저소득층에게 무료 보험 지원',
    };

    const { container } = render(
      <Router>
        <FreeInsurancePage t={t} locale="ko" />
      </Router>,
    );

    expect(container).toHaveTextContent('저소득층에게 무료 보험 지원');
  });
});
