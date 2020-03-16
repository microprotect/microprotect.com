import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BrowserRouter as Router } from 'react-router-dom';

import BenefitShare from './BenefitShare';

jest.mock('../../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('BenefitShare', () => {
  it('renders “see more” link', () => {
    const t = {
      benefit_share_more: '무료보험\n*자세히 보기*',
    };

    const wrapper = render(
      <Router>
        <BenefitShare t={t} />
      </Router>,
    );

    expect(wrapper.text()).toMatch('자세히 보기');
  });
});
