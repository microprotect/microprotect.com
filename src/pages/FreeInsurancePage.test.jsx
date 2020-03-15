import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FreeInsurancePage from './FreeInsurancePage';

jest.mock('../assets');
jest.mock('../assets/v4');
jest.mock('../assets/v5');

Enzyme.configure({ adapter: new Adapter() });

describe('FreeInsurancePage', () => {
  it('renders title', () => {
    const t = {
      donation_title: '저소득층에게 무료 보험 지원',
    };

    const wrapper = render(
      <Router>
        <FreeInsurancePage t={t} locale="ko" />
      </Router>,
    );

    expect(wrapper.text()).toMatch('저소득층에게 무료 보험 지원');
  });
});
