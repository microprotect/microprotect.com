import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import BenefitShare from './BenefitShare';

jest.mock('../../assets/v5');

describe('BenefitShare', () => {
  it('renders “see more” link', () => {
    const t = {
      benefit_share_more: '무료보험\n*자세히 보기*',
    };

    const { container } = render(
      <Router>
        <BenefitShare t={t} />
      </Router>,
    );

    expect(container).toHaveTextContent('자세히 보기');
  });
});
